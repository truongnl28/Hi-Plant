import React, { useState } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Email: "+email+" Password: "+password);
    }

    return (
        <>
            {/* HEADER */}
            <Container className="my-3">
                <Row className="align-items-center">
                    <Col>
                        <Link to="/"><Image src="images/HiPlantLogo.png" fluid /></Link>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <a href="#" className={styles.greentext} style={{ fontSize: '20px' }}>Bạn cần giúp đỡ?</a>
                    </Col>
                </Row>
            </Container>

            {/* CONTENT */}
            <Container className="my-5">
                <Row>
                    <Col xs={"auto"}>
                        <Image src="images/LoginPageImage.png" fluid rounded />
                    </Col>
                    <Col>
                        <div className="h-100 p-5 border border-2 border-dark text-center">
                            <h1 className={styles.greentext}>Đăng nhập</h1>

                            {/* FORM */}
                            <Form onSubmit={handleSubmit}>
                                {/* EMAIL */}
                                <Form.Group className="my-3" controlId="loginEmail">
                                    <Form.Control className={styles.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Đăng nhập bằng tài khoản email" />
                                </Form.Group>
                                {/* PASSWORD */}
                                <Form.Group className="mb-5" controlId="loginPassword">
                                    <Form.Control className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu"/>
                                </Form.Group>

                                <div className="d-grid gap-2">
                                    <Button className={styles.button} size="lg" type="submit">
                                        ĐĂNG NHẬP
                                    </Button>
                                    <p className="mt-3 text-end fw-bold">
                                        Bạn chưa có tài khoản? <Link to="/register" className="text-danger">Đăng ký</Link> 
                                    </p>
                                </div>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginPage;