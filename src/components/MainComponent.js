import React, { Component } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import ProductPage from "./ProductPageComponent";


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