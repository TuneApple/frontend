import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
footer.render(
        <Footer />
);



