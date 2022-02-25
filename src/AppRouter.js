import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setProducts } from "./pages/home/store/actions";

import { Home } from "./pages";
import { Navbar } from "./components";

import './App.scss';
import products from "./assets/products.json";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setProducts(products))

    }, [dispatch]);

    return (
        <div className="app">
            <Navbar/>
            <div className="routes">
                <Home/>
            </div>
        </div>
    );
}

export default App;
