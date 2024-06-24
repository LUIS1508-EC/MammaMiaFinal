import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from '../views/Home'
import Pizzas from '../views/Pizzas'
import Carrito from '../views/Carrito'

const AppRoutes = () => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch("/pizzas.json")
            .then((res) => res.json())
            .then((data) => setPizzas(data))
            .catch((error) => console.error("Error en la carga de datos", error))  
    }, [])

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizzas/:id" element={<Pizzas pizzas={pizzas} />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/pizzas" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRoutes