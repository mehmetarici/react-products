import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setPagination } from "./pages/home/store/actions";

import { Home } from "./pages";
import { Navbar } from "./components";

import './App.scss';
import products from "./assets/products.json";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
        dispatch(setPagination({size: 12, page: 0, pageCount: Math.ceil(products.length / 12)}))

    }, [dispatch]);

    return (<div className="app">
        <Navbar/>
        <div className="routes">
            <Home/>
        </div>
    </div>);
}

export default App;
