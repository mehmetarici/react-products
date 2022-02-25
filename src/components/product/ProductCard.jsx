function ProductCard({product}) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={ require(`../../assets/images/${ product.imageName }`) } alt={ product.name }/>
            </div>
            <h2 className="product-title">{ product.name }</h2>
            <div className="product-info">
                <span>
                    Marka:&nbsp;
                    <span className="product-info-value">{ product.brand }</span>
                </span>
                <span>
                    Renk:&nbsp;
                    <span className="product-info-value">{ product.color }</span>
                </span>
            </div>
            <div className="product-price">
                <span className="price">{ `${ product.amount.discounted.toFixed(2) } ${ product.amount.currency }` }</span>
                { product.amount.discountRatePercentage !== 0 &&
                    <div className="discount">
                    <span className="normal-price">
                       { `${ product.amount.original.toFixed(2) } ${ product.amount.currency }` }
                    </span>
                        <span className="percentage">{ `${ product.amount.discountRatePercentage }%` }</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default ProductCard;
