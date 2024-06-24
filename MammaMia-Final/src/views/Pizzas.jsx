import React from 'react'
import { useParams } from 'react-router-dom'
import { Container, Col, Button, Row } from 'react-bootstrap'
import { ContextCarrito } from '../context/Context'
import { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Pizzas = ({ pizzas }) => {
    const { id, } = useParams()
    const pizza = pizzas.find((pizza) => pizza.id === id)
    const { agregarAlCarrito } = useContext(ContextCarrito)
    const cname = pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)
    if (!pizza) {
        return (
            <Container className="text-center mt-4">
                <h2>Pizza no encontrada</h2>
            </Container>
        );
    }
    const handleAgregar = () => {
        agregarAlCarrito(pizza)
    }

    return (
        <Container className="text-center mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <img src={pizza.img} alt={pizza.name} style={{ maxwidth: '100%', borderRadius: '5px' }} />
                </Col>
                <Col xs={12} md={6} className="text-start">
                    <h2>{cname}</h2>
                    <p>{pizza.desc}</p>
                    <p>Ingredientes:</p>
                    <ul>
                        {pizza.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p><span>Precio: ${pizza.price}</span></p>
                    <Button variant="success" onClick={handleAgregar}><FaShoppingCart className="me-2" /> Añadir</Button>
                </Col>
            </Row>
        </Container>
    )
}


export default Pizzas