import { BasketButton, BasketItem } from "../index";
import "./style/Basket.scss"

function Basket() {
    return (
        <div className="basket-popover">
            <BasketButton />
            <div className="basket-list">
                <BasketItem />
                <BasketItem />
                <BasketItem />
                <BasketItem />
            </div>
        </div>
    );
}

export default Basket;
