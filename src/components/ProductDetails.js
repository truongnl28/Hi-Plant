import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Row, Col, Button, Container, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ProductDetails = ({ products }) => {
  const { productName } = useParams();
  const [quantityValue, setQuantityValue] = useState(0);

  // Find the selected product from the products list
  const selectedProduct = products.find(product => product.name === productName);

  if (!selectedProduct) {
    return <div>Product not found!</div>;
  }

  const { image, name, price, quantity, address } = selectedProduct;

  const handleDecrease = () => {
    if (quantityValue > 0) {
      setQuantityValue(prevQuantity => prevQuantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantityValue(prevQuantity => prevQuantity + 1);
  };

  const handleQuantityChange = e => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantityValue(value);
    }
  };

  const handleOrder = () => {
    // Handle order logic here
    console.log('Order placed!');
  };

  return (
    <div>
      <Container className="my-3">
        <Row className="align-items-center">
          <Col>
            <Link to="/"><Image src={process.env.PUBLIC_URL + "/images/MainLogo.png"} fluid /></Link>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="text-center">
              <i className="fa fa-user fa-2x" aria-hidden="true"></i>
              <p className="m-0">Người dùng</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="pt-3 pb-1 px-5 text-white" style={{ backgroundColor: '#3DB149' }} fluid>
        <div className="text-uppercase fw-bold">
          <h1 className="">THÔNG TIN SẢN PHẨM</h1>
        </div>
      </Container>

      <Container>
        <Row className="align-items-center" style={{ minHeight: '80vh' }}>
          <Col md={6}>
            <Image
              src={process.env.PUBLIC_URL + image}
              alt="Product Image"
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Col>
          <Col md={6}>
            <h2>{name}</h2>
            <p style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Address: {address}</p>
            <Row className="align-items-center">
              <Col md={4} className="d-flex">
                <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                <FormControl
                  value={quantityValue}
                  onChange={handleQuantityChange}
                  type="number"
                  min="0"
                />
                <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
              </Col>
              <Col md={4}>
                <Button onClick={handleOrder}>ĐẶT HÀNG</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default ProductDetails;
