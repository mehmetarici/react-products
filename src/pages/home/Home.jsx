import PageTitle from "./PageTitle";
import FilterSidebar from "./FilterSidebar";
import { ProductList } from "../../components";

import "./style/Home.scss"

function Home() {
    return (
        <div className="home">
            <PageTitle/>

            <div className="page-content">
                <FilterSidebar/>
                <ProductList />
            </div>
        </div>
    );
}

export default Home;
