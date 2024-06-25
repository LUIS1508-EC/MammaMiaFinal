import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Cards'
import { Container, Row, Col } from 'react-bootstrap'

const Home = () => {
    const [pizzas, setPizzas] = useState([])
    useEffect(() => {
        fetch("/pizzas.json")
            .then((res) => res.json())
            .then((data) => setPizzas(data))
            .catch((error) => console.error("Error en la carga de datos", error))


    }, [])

    return (
        <Container className='d-flex'>
            <div>
                <div>
                    <Banner title={"Bienvenidos"} />
                </div>
                <Row xs={1} md={2} lg={4} className='g-5'>
                    {pizzas.map((pizza) => (
                        <Col key={pizza.id}>
                            <Card pizza={pizza} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default Home
