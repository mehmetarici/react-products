import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getProducts } from "./store/selector";

import PageTitle from "./PageTitle";
import FilterSidebar from "./FilterSidebar";
import { ProductList } from "../../components";

import "./style/Home.scss"

function Home() {
    const products = useSelector(state => getProducts(state.productStore));

    const [filterData, setFilterData] = useState({colors: [], brands: []});

    useEffect(() => {
        const productColors = [];
        const productBrands = [];

        const storageProducts = JSON.parse(localStorage.getItem("products"));
        storageProducts.forEach(product => {
            productColors.push(product.color)
            productBrands.push(product.brand)
        });
        setFilterData({colors: productColors, brands: productBrands})

    }, []);

    if (products && products.length > 0)
        return (
            <div className="home">
                <PageTitle/>

                <div className="page-content">
                    <FilterSidebar filter={ filterData }/>
                    <ProductList products={ products }/>
                </div>
            </div>
        );

    return null; // TODO, no products component or loading logic here
}

export default Home;
