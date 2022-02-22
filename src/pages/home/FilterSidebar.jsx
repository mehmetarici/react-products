import { List, RadioButton } from "../../components";
import "./style/FilterSidebar.scss"

function FilterSidebar() {
    const colorFilters = [
        <RadioButton id="Lacivert" label="Lacivert (3)" value="2"/>,
        <RadioButton id="Sarı" label="Sarı (6)" value="3"/>,
        <RadioButton id="Siyah" label="Siyah (2)" value="4"/>,
        <RadioButton id="Beyaz" label="Beyaz (5)" value="5"/>
    ]

    const orderFilters = [
        <RadioButton id="En Düşük Fiyat" label="En Düşük Fiyat" value="2"/>,
        <RadioButton id="En Yüksek Fiyat" label="En Yüksek Fiyat" value="3"/>,
        <RadioButton id="En Yeniler (A>Z)" label="En Yeniler (A>Z)" value="4"/>,
        <RadioButton id="En Yeniler (Z>A)" label="En Yeniler (Z>A)" value="5"/>
    ]
    const brandFilters = [
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
        <RadioButton id="Samsung (4)" label="Samsung (4)" value="2"/>,
    ]

    return (
        <div className="filter-sidebar">
            <div className="filter-category">
                <h4 className="title">Renk</h4>
                <List data={ colorFilters }/>
            </div>
            <div className="filter-category">
                <h4 className="title">Sıralama</h4>
                <List data={ orderFilters }/>
            </div>
            <div className="filter-category">
                <h4 className="title">Marka</h4>
                <List data={ brandFilters }/>
            </div>
        </div>
    );
}

export default FilterSidebar;
