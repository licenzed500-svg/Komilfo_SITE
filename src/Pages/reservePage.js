import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import logo from "./Gif/logo193.gif"
class reservePage extends Component {
    render() {
        return (
            <div style={{backgroundColor:"rgba(	242, 187, 198)", backgroundImage: `url(${logo})`, backgroundRepeat:"no-repeat", height:800, weight:4000}} >
                <Container style = {{width:"500px"}}>
                    <h1 className='text-center'>Забронировать</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Введите ваш Email</Form.Label>
                            <Form.Control type="email" placeholder="Ваша электронная почта" />
                            <Form.Text>
                                *МЫ НИКОГДА НЕ ПЕРЕДАЕМ АДРЕСА EMAIL ПОСТОРОННИМ ЛИЦАМ
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Введите ваш номер телефона</Form.Label>
                            <Form.Control type="email" placeholder="Ваш номер телефона" />
                            <Form.Text>
                                *МЫ НИКОГДА НЕ ПЕРЕДАЕМ НОМЕРА ТЕЛЕФОНОВ ПОСТОРОННИМ ЛИЦАМ
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ваше имя</Form.Label>
                            <Form.Control type="email" placeholder="Ваше имя" />
                            <Form.Text>
                                
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Ваши пожелания</Form.Label>
                                <Form.Control as="textarea" rows="3"/>
                            </Form.Group>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type = "checkbox" label = "Подтверждаю правильность данных" />
                            </Form.Group>
                            <Button variant="primary " type = "submit">Отправить</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default reservePage;