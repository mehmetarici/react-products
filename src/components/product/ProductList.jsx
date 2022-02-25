import { ProductItem } from "../index";

import "./style/ProductList.scss"

function ProductList({products}) {
    return (
        <div className="product-list">
            {products.map(product => <ProductItem key={product.id} product={product}/>)}
        </div>
    );
}

export default ProductList;
