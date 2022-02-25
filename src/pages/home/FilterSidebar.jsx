import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "./store/actions";
import { List, RadioButton } from "../../components";
import "./style/FilterSidebar.scss"

function FilterSidebar({filter}) {
    const {sortBy} = useSelector(state => state.productStore)
    const dispatch = useDispatch();

    const [colors, setColors] = useState([]);
    const [brands, setBrands] = useState([]);
    const [orders] = useState([
        <RadioButton
            id="minAmount"
            label="En Düşük Fiyat"
            value="minAmount"
            onChange={ () => _sortProducts("minAmount") }
        />,
        <RadioButton
            id="maxAmount"
            label="En Yüksek Fiyat"
            value="maxAmount"
            onChange={ () => _sortProducts("maxAmount") }
        />,
        <RadioButton
            id="aToZ"
            label="En Yeniler (A>Z)"
            value="aToZ"
            onChange={ () => _sortProducts("aToZ") }
        />,
        <RadioButton
            id="zToA"
            label="En Yeniler (Z>A)"
            value="zToA"
            onChange={ () => _sortProducts("zToA") }
        />
    ]);

    useEffect(() => {
        const colorOccurrences = filter.colors.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const brandOccurrences = filter.brands.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

        const colorButtons = [...colorOccurrences.entries()]
            .map(([color, count]) => <RadioButton id={ color } label={ `${ color } (${ count })` } value={ color }/>);
        setColors(colorButtons)

        const brandButtons = [...brandOccurrences.entries()]
            .map(([brand, count]) => <RadioButton id={ brand } label={ `${ brand } (${ count })` } value={ brand }/>);
        setBrands(brandButtons)
    }, [filter]);

    function _sortProducts(sortOption) {
        if (sortOption && sortOption !== sortBy)
            dispatch(sortProducts(sortOption));
    }

    return (
        <div className="filter-sidebar">
            <div className="filter-category">
                <h4 className="title">Renk</h4>
                <List data={ colors }/>
            </div>
            <div className="filter-category">
                <h4 className="title">Sıralama</h4>
                <List data={ orders }/>
            </div>
            <div className="filter-category">
                <h4 className="title">Marka</h4>
                <List data={ brands }/>
            </div>
        </div>
    );
}

export default FilterSidebar;
