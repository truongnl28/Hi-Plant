import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Header = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const sliderRef = useRef(null);

   useEffect(() => {
      const interval = setInterval(() => {
         sliderRef.current.slickNext();
      }, 3000);
      return () => clearInterval(interval);
   }, []);

   const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
   };

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 3000,
      fade: true,
      cssEase: 'linear'
   };

   return (
      <React.Fragment>
         <Container className='header-top'>
            <Row className="align-items-center">
               <Col sm={2}>
                  <img src="assets/images/logo.png" height="80" width="130" alt="Logo" />
               </Col>
               <Col sm={8}>
                  <Form inline className="d-flex justify-content-between align-items-center">
                     <Form.Group controlId="category" className="mr-2">
                        <Form.Control as="select">
                           <option>All</option>
                           <option>Ớt</option>
                           <option>Rau</option>
                           <option>Trái cây</option>
                           <option>Củ</option>
                        </Form.Control>
                     </Form.Group>
                     <Form.Control type="text" placeholder="Nhập tên sản phẩm" className="mr-2" />
                     <Button variant="success" type="submit">Search</Button>
                  </Form>
               </Col>
               <Col sm={2} className="text-left">
                  <div className="d-flex flex-column align-items-center">
                     <i className="fa fa-user fa-lg" style={{ fontSize: '40px' }} />
                     <Link to="/login" className='text-black'>Đăng nhập</Link>
                  </div>
               </Col>
            </Row>
         </Container>
         <Navbar dark expand="md" >
            <div className="container">
               <div className='row'>
                  <NavbarToggler onClick={toggleNav} />
                  <Collapse isOpen={isNavOpen} navbar>
                     <Nav navbar>
                        <NavItem>
                           <NavLink className="nav-link" to="/home">
                              <span className="fa fa-home fa-lg"></span> TRANG CHỦ
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/about">
                              <span className="fa fa-info fa-lg"></span> THÔNG TIN
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/product">
                              <span className="fa fa-list fa-lg"></span> SẢN PHẨM
                           </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="nav-link" to="/news">
                              <span className="fa fa-address-card fa-lg"></span> TIN TỨC
                           </NavLink>
                        </NavItem>
                     </Nav>
                  </Collapse>
               </div>
            </div>
         </Navbar>
         <div className="jumbotron">
            <Slider {...settings} ref={sliderRef}>
               <div>
                  <img src="assets/images/img1.png" alt="Image 1" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100vh' }} />
               </div>
               <div>
                  <img src="assets/images/img2.jpg" alt="Image 2" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100vh' }} />
               </div>
               <div>
                  <img src="assets/images/img3.jpg" alt="Image 3" className="img-fluid w-100" style={{ objectFit: 'cover', height: '100vh' }} />
               </div>
            </Slider>
         </div>
      </React.Fragment>
   );
};

export default Header;
