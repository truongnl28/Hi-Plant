import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
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
         <Container fluid className='header-top'>
            <Row className="align-items-center">
               <Col sm={2}>
                  <img src="assets/images/logo.png" height="80" width="130" alt="Logo" />
               </Col>
               <Col sm={6} md={8}>
                  <Form inline className="d-flex justify-content-center align-items-center">
                     <FormGroup className="mr-2" style={{width: '120px'}}>
                        <Input type="select" className="form-control">
                           <option>All</option>
                           <option>Ớt</option>
                           <option>Rau</option>
                           <option>Trái cây</option>
                           <option>Củ</option>
                        </Input>
                     </FormGroup>
                     <div className="input-group">
                        <Input type="text" placeholder="Nhập tên sản phẩm" className="form-control mr-2" />
                        <div className="input-group-append">
                           <Button color="success" type="submit" style={{width: '100px'}}>
                              <span className="fa fa-search"></span>
                           </Button>
                        </div>
                     </div>
                  </Form>
               </Col>
               <Col sm={4} md={2} className="d-flex align-items-center justify-content-center">
                  <NavLink className="nav-link" to="/login">
                     <span className="fa fa-user fa-lg"></span> Đăng nhập
                  </NavLink>
               </Col>
            </Row>
         </Container>
         <Navbar dark expand="md">
            <NavbarToggler onClick={toggleNav} />
            <Collapse isOpen={isNavOpen} navbar className="d-flex justify-content-center align-items-center">
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
