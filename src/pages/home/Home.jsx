import PageTitle from "./PageTitle";
import FilterSidebar from "./FilterSidebar";

function Home() {
    return (
        <div className="home">
            <PageTitle/>

            <div className="page-content">
                <FilterSidebar/>
            </div>
        </div>
    );
}

export default Home;
