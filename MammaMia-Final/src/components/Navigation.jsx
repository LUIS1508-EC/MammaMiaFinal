import React from 'react'
import { Link } from 'react-router-dom'
import { FaPizzaSlice, FaShoppingCart } from 'react-icons/fa'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { ContextCarrito } from '../context/Context'

const Navigation = () => {
    const { total } = useContext(ContextCarrito)
    return (
        <Navbar className="navbar navbar-dark bg-dark d-flex">
            <Container className='d-flex justify-content-center'>
                <Link className="navbar-brand" to="/">
                    <FaPizzaSlice className="me-2" />
                    MammaMia
                </Link>
                <Nav className="me-auto d-flex justify-content-end">
                    <Link className="nav-link" to="/carrito">Carro
                        <FaShoppingCart className="me-2" />
                        <i className='bi bi-cart'></i> ${total.toFixed(2)}
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation