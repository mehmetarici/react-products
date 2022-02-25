import "./style/BasketButton.scss"

function BasketButton({productInBasketCount, onClick}) {
    return (
        <div className="basket-button" onClick={onClick}>
            <span className="badge">{productInBasketCount}</span>
            <button disabled={productInBasketCount===0}>Sepetim</button>
        </div>
    );
}

export default BasketButton;
