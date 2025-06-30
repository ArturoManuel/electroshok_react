import React, { useState, useEffect } from 'react';
import './Carrito.css';

const Carrito = () => {
  const productosIniciales = [
    {
      id: 1,
      nombre: "Laptop XPS 13",
      marca: "Dell",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIpHsriaKJuwY2IpngNe7W7I6Zf6feddJ8w&s",
      precio: 4693.96,
      cantidad: 1
    },
    {
      id: 2,
      nombre: "Smartphone Galaxy S24",
      marca: "Samsung",
      imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/348212/Galaxy-S24-Ultra-plata_1.jpg?v=638443230506070000",
      precio: 3609.96,
      cantidad: 1
    }
  ];

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadInitialData = () => {
      setCartItems(productosIniciales);
    };
    
    loadInitialData();
  }, []); 
  
  useEffect(() => {
    const nuevoTotal = cartItems.reduce((suma, item) => {
      return suma + (item.precio * item.cantidad);
    }, 0);
    
    setTotal(nuevoTotal);
  }, [cartItems]); 

 
  const handleQuantityChange = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) nuevaCantidad = 1;
    
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.id === id) {
          return { ...item, cantidad: parseInt(nuevaCantidad) };
        }
        return item;
      });
    });
  };


  const handleRemoveItem = (id) => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const handleCheckout = () => {
    alert('¡Redireccionando al proceso de pago!');
   
    window.location.href = 'finalizar-pago.html';
  };

  return (
    <section className="cart-section">
      <h2>Carrito de Compras</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
          <button className="continue-shopping">
            <a href="index.html">Continuar Comprando</a>
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img 
                  src={item.imagen} 
                  alt={item.nombre} 
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.nombre}</h3>
                  <p className="cart-item-brand">{item.marca}</p>
                  <p className="cart-item-price">S/ {item.precio.toFixed(2)}</p>
                  
                  <div className="cart-item-quantity">
                    <label htmlFor={`quantity-${item.id}`}>Cantidad:</label>
                    <input 
                      type="number" 
                      id={`quantity-${item.id}`} 
                      name={`quantity-${item.id}`} 
                      value={item.cantidad} 
                      min="1"
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </div>
                  
                  <p className="cart-item-subtotal">
                    Subtotal: S/ {(item.precio * item.cantidad).toFixed(2)}
                  </p>
                  
                  <button 
                    className="cart-item-remove"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <i className="fa-solid fa-trash"></i> Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <p>Total: <span className="cart-total">S/ {total.toFixed(2)}</span></p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Carrito;