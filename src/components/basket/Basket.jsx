import { useState } from "react";
import { useSelector } from "react-redux";
import { getBasketProducts } from "../../pages/home/store/selector";
import { BasketButton, BasketItem } from "../index";
import "./style/Basket.scss"

function Basket() {
    const products = useSelector((state) => getBasketProducts(state.productStore));

    const [basketActive, setBasketActive] = useState(false);

    return (
        <div className="basket-popover">
            <BasketButton productInBasketCount={ products.length } onClick={ () => setBasketActive(active => !active) }/>
            <div className={`basket-list${basketActive ? " basket-active" : ""}`}>
                { products.map(product => <BasketItem setBasketActive={setBasketActive} key={ product.id } product={ product }/>) }
            </div>
        </div>
    );
}

export default Basket;
