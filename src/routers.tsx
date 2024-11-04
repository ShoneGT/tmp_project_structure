
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import StockExchange from './pages/StockExchange/StockExchange';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                {/*<Route path="/" element={<Home />} />*/}
                <Route path="/stock-exchange" element={<StockExchange />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
