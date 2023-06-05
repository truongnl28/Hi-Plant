import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Media } from 'reactstrap';
import productsData from '../share/productData';

const ProductDetails = () => {
    const { id } = useParams();
    const product = productsData.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <Row>
                <Col md="4">
                    <Media>
                        <Media left>
                            <Media object src={product.image} alt="Product Image" style={{ width: '100%', maxHeight: '300px' }} />
                        </Media>
                    </Media>
                </Col>
                <Col md="8">
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Address: {product.address}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;