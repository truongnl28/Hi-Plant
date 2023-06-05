import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import productsData from '../share/productData';

const ProductDetailPage = () => {
    const { name } = useParams();
    const history = useHistory();

    // Tìm sản phẩm tương ứng dựa trên name trong productsData
    const product = productsData.find((product) => product.name === name);

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        // Xử lý logic thêm sản phẩm vào giỏ hàng
        console.log(`Add ${quantity} ${product.name} to cart`);

        // Chuyển đến trang khác
        history.push('/cart'); // Thay đổi đường dẫn '/cart' thành đường dẫn mong muốn
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <div className="product-image">
                <Card>
                    <CardImg top src={product.image} alt="Product Image" />
                </Card>
            </div>
            <div className="product-info">
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Address: {product.address}</p>
                <div className="order-section">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} />
                    <Button color="primary" onClick={handleAddToCart}>
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
