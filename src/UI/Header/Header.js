import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import logo from './HeaderLogo/logo192.png'
import About from "../../Pages/About";
import Contacts from "../../Pages/Contacts";
import Home from "../../Pages/Home"
import reservePage from "../../Pages/reservePage"
import "./Header.css" 

//<Nav.Link href="/about">О нас</Nav.Link>
export default class Header extends Component {
   render() {
        return( 
            
            <><Navbar collapseOnSelect expand="md" bg='light' variant="light">
                <Container>
                    <Navbar.Brand href="/home">
                        <img
                            src={logo}
                            height="50"
                            width="70"
                            className='d-inline-block align-top'
                            alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="flex-grow-1 justify-content-end">
                            <Nav.Link href="/home">Главная</Nav.Link>
                            <Nav.Link href="/contacts">Контакты</Nav.Link>
                            <Nav.Link href="/booking">Забронировать</Nav.Link>
                            <Nav.Link href="/sale">Одноразовые купоны</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/booking" component={reservePage} />
                    </Switch>
            </Router>
            </>
            
             

        );
   }
}
