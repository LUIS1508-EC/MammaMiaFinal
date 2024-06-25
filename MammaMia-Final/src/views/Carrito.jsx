import React from 'react'
import { useContext } from 'react'
import { Alert, Button, Container, ListGroup } from 'react-bootstrap'
import { ContextCarrito } from '../context/Context';

const Carrito = () => {
    const { items, total, agregarAlCarrito, restCart, erase } = useContext(ContextCarrito)
    const handleRemove = (item) => {
      const confirmRemove = window.confirm(
        "¿Seguro que desea eliminar este producto?"
      );
      if (confirmRemove) {
        restCart(item);
      }
    };
  return (
    <Container className="text-center mt-4">
      {items.length === 0 ? (
        <Alert variant="info">El carrito está vacío.</Alert>
      ) : (
        <>
          <ListGroup>
            {items.map((item, index) => (
              <ListGroup.Item
                key={`${item.id}_${index}`}
                className="d-flex justify-content-between"
              >
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    style={{ maxWidth: "50px" }}
                  />
                  <span className="ml-2">{item.name}</span>
                </div>
                <div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleRemove(item)}
                  >
                    -
                  </Button>{" "}
                  <span className="mx-2">{item.quantity}</span>{" "}
                  <Button
                    variant="success"
                    size="sm"
                    onClick={() => agregarAlCarrito(item)}
                  >
                    +
                  </Button>
                  <span className="mx-2">
                    Precio: ${item.price * (item.quantity || 1)}
                  </span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3">
            <strong>Total:</strong> ${total.toFixed(2)}
          </div>
          <div className="mt-3">
            <Button className="m-2" variant="warning" onClick={erase}>
              Limpiar Carrito
            </Button>
            <Button variant="warning">
              Pagar
            </Button>
          </div>
          
        </>
      )}
    </Container>
  );
};

export default Carrito