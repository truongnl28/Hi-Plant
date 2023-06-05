import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./CreateProduct.module.css"
import Footer from "./Footer";

function CreateProduct() {
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [address, setAddress] = useState("");

    const [imageFile, setImageFile] = useState();

    const handleChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageFile(e.target.files[0]);
        }
    }

    const removeImage = () => {
        setImageFile();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(imageFile);
    }

    return (
        <>
            {/* HEADER */}
            <Container className="my-3">
                <Row className="align-items-center">
                    <Col>
                        <Link to="/"><Image src={process.env.PUBLIC_URL + "/images/MainLogo.png"} fluid /></Link>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <div className="text-center">
                            <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                            <p className="m-0">Nông dân</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* BODY */}
            <Container className="pt-3 pb-1 px-5 text-white" style={{ backgroundColor: '#3DB149' }} fluid>
                <div className="text-uppercase fw-bold">
                    <h1 className="">NHẬP THÔNG TIN SẢN PHẨM</h1>
                </div>
            </Container>
            <Container className="my-5">
                <Form onSubmit={handleSubmit}>
                    <Row>

                        <Col xs={"auto"}>
                            <Form.Control type="file" onChange={handleChange} />
                            {imageFile && (
                                <div className="mt-2">
                                    <Image src={URL.createObjectURL(imageFile)} fluid rounded />
                                </div>
                            )}

                        </Col>
                        <Col>
                            <div className="h-100 p-5 text-center">

                                {/* NAME */}
                                <Form.Group className="mb-4" controlId="productName">
                                    <Form.Control className={styles.input} type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Tên sản phẩm" />
                                </Form.Group>
                                {/* EMAIL */}
                                <Form.Group className="mb-4" controlId="price">
                                    <Form.Control className={styles.input} type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Giá cả" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="quantity">
                                    <Form.Control className={styles.input} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Số lượng" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="address">
                                    <Form.Control className={styles.input} type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Địa chỉ" />
                                </Form.Group>

                                <div className="d-flex justify-content-evenly">
                                    <Button className={styles.confirmButton} size="lg" type="submit">
                                        Xác nhận
                                    </Button>
                                    <Link to="/farmer">
                                        <Button className={styles.cancelButton} size="lg" type="button">
                                            Hủy bỏ
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Container>

            <Footer />
        </>
    )
}

export default CreateProduct;