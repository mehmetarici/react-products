import { useDispatch } from "react-redux";
import { addToBasket } from "../../pages/home/store/actions";

import { ProductCard } from "../index";

function ProductItem({product}) {
    const dispatch = useDispatch();

    function _addToBasket() {
        dispatch(addToBasket(product.id));
    }

    return (
        <div className="product-item">
            <ProductCard product={ product }/>
            <div className="add-to-basket">
                <button
                    disabled={ product.inBasket }
                    onClick={ _addToBasket }>
                    { product.inBasket || product.stockCount === 0 ? "Bu ürünü sepete ekleyemezsiniz." : "Sepete Ekle" }
                </button>
            </div>
        </div>
    );
}

export default ProductItem;
