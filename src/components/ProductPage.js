import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import productsData from '../share/productData';

const ProductCard = ({ image, name, price, quantity, address }) => {
    return (
        <Card style={{ borderRadius: '5px', borderWidth: '1px', borderColor: '#000000', borderStyle: 'solid' }}>
            <Link to={`/product/${name}`} style={{ textDecoration: 'none', color: '#000000' }}>
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                    <CardImg top src={image} alt="Product Image" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <CardBody>
                    <CardTitle style={{ textAlign: 'center', fontWeight: 'bold' }}>{name}</CardTitle>
                    <CardText>Price: {price}</CardText>
                    <CardText>Quantity: {quantity}</CardText>
                    <CardText>Address: {address}</CardText>
                </CardBody>
            </Link>
        </Card>
    );
};

const ProductList = ({ products }) => {
    return (
        <div className='container'>
            <div className='row'>
                <Row>
                    {products.map((product, index) => (
                        <Col md={3} key={index} style={{ marginBottom: '15px' }}>
                            <ProductCard {...product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

const ProductPage = () => {
    return (
        <div style={{ marginTop: '15px' }}>
            <ProductList products={productsData} />
        </div>
    );
};

export default ProductPage;
