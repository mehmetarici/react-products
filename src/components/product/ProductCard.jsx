import SampleProduct from "../../assets/images/sample-product-1.png"

function ProductCard() {
    return (
        <div className="product">
            <div className="product-image">
                <img src={ SampleProduct } alt="Sample Product"/>
            </div>
            <h2 className="product-title">Apple iPhone 11 Pro</h2>
            <div className="product-info">
                <span>
                    Marka:
                    <span className="product-info-value">Apple</span>
                </span>
                <span>
                    Renk:
                    <span className="product-info-value">Siyah</span>
                </span>
            </div>
            <div className="product-price">
                <span className="price">90,85 TL</span>
                <div className="discount">
                    <span className="normal-price">
                        124,00 TL
                    </span>
                    <span className="percentage">12%</span>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
