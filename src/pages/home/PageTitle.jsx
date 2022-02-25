import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "./store/actions";
import "./style/PageTitle.scss"

function PageTitle() {
    const dispatch = useDispatch();
    const {searchText, sortBy} = useSelector(state => state.productStore)

    function _sortProducts(sortOption) {
        if (sortOption && sortOption !== sortBy)
            dispatch(sortProducts(sortOption));
    }

    return (
        <div className="page-title">
            <div className="title">
                <h1>iPhone iOS cep telefonu</h1>
                { searchText &&
                    <h4>
                        <span>Aranan Kelime: </span>
                        { searchText }
                    </h4>
                }
            </div>
            <div className="sort-select">
                <select value={ sortBy ? sortBy : "" } onChange={ (e) => _sortProducts(e.target.value) } name="sortProducts" id="sort-products" placeholder="Sıralama">
                    <option value="" disabled hidden>Sıralama</option>
                    <option value="minAmount">En Düşük Fiyat</option>
                    <option value="maxAmount">En Yüksek Fiyat</option>
                    <option value="aToZ">En Yeniler (A>Z)</option>
                    <option value="zToA">En Yeniler (Z>A)</option>
                </select>
            </div>
        </div>
    );
}

export default PageTitle;
