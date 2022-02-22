
import SampleProduct from "../../assets/images/sample-product-1.png"
import "./style/BasketItem.scss"

function BasketItem() {
    return (
        <div className="basket-item">
            <div className="product-image">
                <img src={SampleProduct} alt="Sample Product"/>
            </div>
            <div className="product-description">
                <div className="product-title">
                    <h2>iPhone 11 Kırmızı Kılıflı Garantili Telefon</h2>
                    <h2>Telefon</h2>
                </div>
                <div className="product-action">
                    <button>Kaldır</button>
                </div>

            </div>
        </div>
    );
}

export default BasketItem;
