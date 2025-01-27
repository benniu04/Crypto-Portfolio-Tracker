import { useState } from "react";
import './App.css';

function App() {
    const [portfolio, setPortfolio] = useState([]);

    return (
        <div className="main-background">
            <div className="main-container">
                <h1 className="app-title">Crypto Portfolio Tracker</h1>
            </div>
        </div>
        
    )
}

export default App;
