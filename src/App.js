import { Navbar } from "./components";
import { Home } from "./pages";

import './App.scss';

function App() {
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
