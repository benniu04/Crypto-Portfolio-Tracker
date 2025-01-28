import { useState } from "react";
import './App.css';
import InfoContainer from "./components/InfoContainer";

function App() {
    const [portfolio, setPortfolio] = useState([]);

    return (
        <div className="app">
            <InfoContainer />
            <div className="container">
                
            </div>
        </div>
    )
}

export default App;
