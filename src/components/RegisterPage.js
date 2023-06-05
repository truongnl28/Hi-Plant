import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, Form, Image, Nav, Row, Tab, TabContainer } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./RegisterPage.module.css";
import Footer from "./Footer";

function RegisterPage() {
    const [traderName, setTraderName] = useState('');
    const [traderEmail, setTraderEmail] = useState('');
    const [traderPassword, setTraderPassword] = useState('');
    const [traderContact, setTraderContact] = useState('');
    const [traderAddr, setTraderAddr] = useState('');
    const [traderCID, setTraderCID] = useState('');

    const [farmerName, setFarmerName] = useState('');
    const [farmerEmail, setFarmerEmail] = useState('');
    const [farmerPassword, setFarmerPassword] = useState('');
    const [farmerContact, setFarmerContact] = useState('');
    const [farmerAddr, setFarmerAddr] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(traderName + " " + traderEmail + " " + traderPassword + " " + traderContact + " " + traderAddr + " " + traderCID);
    }
    return (
        <>
            <Container>
                <TabContainer defaultActiveKey="trader">
                    <Row className="align-items-center">
                        <Col md="auto" className="vh-100 m-5 p-5 border-end border-dark">
                            <Image src="images/HiPlantLogo2.png" fluid />
                            <Nav variant="pills" className="my-5">
                                <ButtonGroup className={styles.tabs} >
                                    <Button>
                                        <Nav.Item>
                                            <Nav.Link eventKey="trader">Thương nhân</Nav.Link>
                                        </Nav.Item>
                                    </Button>
                                    <Button >
                                        <Nav.Item>
                                            <Nav.Link eventKey="farmer">Nông dân</Nav.Link>
                                        </Nav.Item>
                                    </Button>
                                </ButtonGroup>


                            </Nav>
                        </Col>
                        <Col>
                            <div className="h-100 p-5 text-center">
                                <h1 className="mb-5" >ĐĂNG KÝ TÀI KHOẢN</h1>

                                {/* TABS */}
                                <Tab.Content>
                                    <Tab.Pane eventKey="trader">
                                        {/* TRADER FORM */}
                                        <Form onSubmit={handleSubmit}>
                                            {/* NAME */}
                                            <Form.Group className="mb-4" controlId="traderName">
                                                <Form.Control className={styles.input} type="text" value={traderName} onChange={(e) => setTraderName(e.target.value)} placeholder="Họ và Tên" />
                                            </Form.Group>
                                            {/* EMAIL */}
                                            <Form.Group className="mb-4" controlId="traderEmail">
                                                <Form.Control className={styles.input} type="email" value={traderEmail} onChange={(e) => setTraderEmail(e.target.value)} placeholder="Tài khoản gmail" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="traderPassword">
                                                <Form.Control className={styles.input} type="password" value={traderPassword} onChange={(e) => setTraderPassword(e.target.value)} placeholder="Mật khẩu" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="traderContact">
                                                <Form.Control className={styles.input} type="tel" value={traderContact} onChange={(e) => setTraderContact(e.target.value)} placeholder="Thông tin liên hệ" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="traderAddr">
                                                <Form.Control className={styles.input} type="text" value={traderAddr} onChange={(e) => setTraderAddr(e.target.value)} placeholder="Địa chỉ doanh nghiệp" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="traderCID">
                                                <Form.Control className={styles.input} type="text" value={traderCID} onChange={(e) => setTraderCID(e.target.value)} placeholder="Mã số doanh nghiệp" />
                                            </Form.Group>

                                            <div className="d-flex justify-content-evenly">
                                                <Button className={styles.registerButton} size="lg" type="submit">
                                                    Xác nhận
                                                </Button>
                                                <Link to="/login">
                                                    <Button className={styles.cancelButton} size="lg" type="button">
                                                        Hủy bỏ
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="farmer">
                                        {/* FARMER FORM */}
                                        <Form onSubmit={handleSubmit}>
                                            {/* NAME */}
                                            <Form.Group className="mb-4" controlId="farmerName">
                                                <Form.Control className={styles.input} type="text" value={farmerName} onChange={(e) => setFarmerName(e.target.value)} placeholder="Họ và Tên" />
                                            </Form.Group>
                                            {/* EMAIL */}
                                            <Form.Group className="mb-4" controlId="farmerEmail">
                                                <Form.Control className={styles.input} type="email" value={farmerEmail} onChange={(e) => setFarmerEmail(e.target.value)} placeholder="Tài khoản gmail" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="farmerPassword">
                                                <Form.Control className={styles.input} type="password" value={farmerPassword} onChange={(e) => setFarmerPassword(e.target.value)} placeholder="Mật khẩu" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="farmerContact">
                                                <Form.Control className={styles.input} type="tel" value={farmerContact} onChange={(e) => setFarmerContact(e.target.value)} placeholder="Thông tin liên hệ" />
                                            </Form.Group>
                                            <Form.Group className="mb-4" controlId="farmerAddr">
                                                <Form.Control className={styles.input} type="text" value={farmerAddr} onChange={(e) => setFarmerAddr(e.target.value)} placeholder="Địa chỉ nông nghiệp" />
                                            </Form.Group>

                                            <div className="d-flex justify-content-evenly">
                                                <Button className={styles.registerButton} size="lg" type="submit">
                                                    Xác nhận
                                                </Button>
                                                <Link to="/login">
                                                    <Button className={styles.cancelButton} size="lg" type="button">
                                                        Hủy bỏ
                                                    </Button>
                                                </Link>
                                            </div>

                                        </Form>
                                    </Tab.Pane>
                                </Tab.Content>

                            </div>
                        </Col>
                    </Row>
                </TabContainer>
            </Container>

            <Footer />
        </>
    )
}

export default RegisterPage;