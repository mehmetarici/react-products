import "./style/PageTitle.scss"

function PageTitle() {
    return (
        <div className="page-title">
            <div className="title">
                <h1>iPhone iOS cep telefonu</h1>
                <h4>
                    <span>Aranan Kelime: </span>
                    iphone 11
                </h4>
            </div>
            <div className="sort-select">
                <select name="sortProducts" id="sort-products" placeholder="Sıralama">
                    <option value="" disabled selected hidden>Sıralama</option>

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
