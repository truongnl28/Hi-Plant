import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductPage from "./ProductPage";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <ProductPage />
                <Footer />
            </div>
        );
    }
}

export default Main;