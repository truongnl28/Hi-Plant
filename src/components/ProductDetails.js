import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../share/productData';
import Footer from "./Footer";

const ProductDetails = ({ products }) => {
    const { productName } = useParams();

    // Find the selected product from the products list
    const selectedProduct = products.find(product => product.name === productName);

    if (!selectedProduct) {
        return <div>Product not found!</div>;
    }

    const { image, name, price, quantity, address } = selectedProduct;

    const handleOrder = () => {
        // Handle order logic here
        console.log('Order placed!');
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', minHeight: '80vh' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={image} alt="Product Image" />
                </div>
                <div>
                    <h2>{name}</h2>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Address: {address}</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px' }}>Quantity:</label>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            {/* Add more options if needed */}
                        </select>
                    </div>
                    <button onClick={handleOrder}>ĐẶT HÀNG</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
