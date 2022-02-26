import { Pagination, ProductItem } from "../index";

import "./style/ProductList.scss"

function ProductList({products}) {
    return (
        <div className="products">
            <div className="product-list">
                { products.map(product => <ProductItem key={ product.id } product={ product }/>) }
            </div>
            <Pagination/>
        </div>
    );
}

export default ProductList;
