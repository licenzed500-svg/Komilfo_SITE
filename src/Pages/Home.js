import React, { Component } from 'react';
import { Nav, Tab, Container, Row, Col } from 'react-bootstrap';
import eclair from "./Pictures/eclair.jpg"
//#C38764
class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id = "ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant = "pills" className = "flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey ="first">Сладкое</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey ="second">Горячие напитки</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey ="third">Холодные напитки</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p>Шоколадные Эклеры</p>
                                    <p>Отсутствуют такие алергены как:</p>
                                    
                                    <ul>
                                        <li>Орехи</li>
                                        <li>Мед</li>
                                    </ul>
                                
                                    <img src={eclair}/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src={eclair}/>
                                    <p>Description</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src={eclair}/>
                                    <p>Description</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;