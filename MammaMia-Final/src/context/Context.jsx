import { createContext, useState} from "react";

export const ContextCarrito = createContext()
export const Provider = ({ children }) => {
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    const agregarAlCarrito = (item) => {
        setItems([...items, item])
        setTotal(total + item.price)
    }

    const restCart = (item) => {
        const actualizar = [...items]
        const itemIndex = actualizar.findIndex(
            (items) => items.id === item.id
        )

        if (itemIndex !== -1) {
            const removeItems = actualizar.splice(itemIndex, 1)[0]
            setItems(actualizar)
            setTotal(
                (pTotal) =>
                    pTotal - removeItems.price * (removeItems.quantity || 1)
            )
        }
    }

    const erase = () => {
        setItems([])
        setTotal(0)
    }

    return (
        <ContextCarrito.Provider
            value={{ items, total, agregarAlCarrito, restCart, erase }}
            >
            {children}
        </ContextCarrito.Provider>
    )
}