import { Link } from "react-router-dom"
import { Button, Card, ListGroup } from "react-bootstrap"
import { useContext } from "react"
import { ContextCarrito } from "../context/Context"
import PropTypes from "prop-types";

const Card1 = ({ pizza }) => {
    const { agregarAlCarrito } = useContext(ContextCarrito)
    const { id, img, name, ingredients, price } = pizza

    const handleAgregar = () => {
        agregarAlCarrito(pizza)
    }
    const cname = pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} />
            <Card.Body>
                <Card.Title>{cname}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                    <strong>Ingredientes:</strong>
                    </ListGroup.Item>
                    {ingredients.map((ingredients, index) => (
                        <ListGroup.Item key={index}>{ingredients}</ListGroup.Item>
                    ))}
                    </ListGroup>
                    <Card.Text>
                    <strong>Precio:</strong> ${price}
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                        <Link to={`/pizzas/${id}`}>
                            <Button variant="primary">Ver más</Button>
                        </Link>
                        <Button variant="success" onClick={handleAgregar}>Añadir</Button>
                    </div>
            </Card.Body>
        </Card>
    )
}
Card1.propTypes = {
    pizza: PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default Card1
