import { ProductCard } from "../index";

function ProductItem() {
    return (
        <div className="product-item">
            <ProductCard />
            <div className="add-to-basket">
                <button>Sepete Ekle</button>
            </div>
        </div>
    );
}

export default ProductItem;
