import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../share/productData';
import Footer from './Footer';

const ProductCard = ({ image, name, price, quantity, address }) => {
    return (
        <Card style={{ borderRadius: '5px', borderWidth: '1px', borderColor: '#000000', borderStyle: 'solid' }}>
            <Link to={`/product/${name}`} style={{ textDecoration: 'none', color: '#000000' }}>
                <CardImg top src={image} alt="Product Image" />
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

const ProductListPage = () => {
    return (
        <div>
            <Container className="my-3">
                <Row className="align-items-center">
                    <Col>
                        <Link to="/"><Image src={process.env.PUBLIC_URL + "/images/MainLogo.png"} fluid /></Link>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <a href="#" style={{ fontSize: '20px', textDecoration: 'none', color: 'green' }}>Bạn cần giúp đỡ?</a>
                    </Col>
                </Row>
            </Container>

            <Container className="pt-3 pb-1 px-5 text-white" style={{ backgroundColor: '#3DB149' }} fluid>
                <div className="text-uppercase fw-bold">
                    <h1 className="">THÔNG TIN SẢN PHẨM</h1>
                </div>
            </Container>

            <div style={{ marginTop: '15px' }}>
                <ProductList products={productsData} />
            </div>

            <Footer />
        </div>
    );
};

export default ProductListPage;
