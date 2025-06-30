import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './main.css';

const Main = () => {
  
  const productosMasVendidos = [
    {
      id: 1,
      nombre: "Laptop XPS 13",
      marca: "Dell",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSIpHsriaKJuwY2IpngNe7W7I6Zf6feddJ8w&s",
      precio: 4693.96,
    },
    {
      id: 2,
      nombre: "Smartphone Galaxy S24",
      marca: "Samsung",
      imagen:
        "https://coolboxpe.vtexassets.com/arquivos/ids/348212/Galaxy-S24-Ultra-plata_1.jpg?v=638443230506070000",
      precio: 3609.96,
    },
    {
      id: 3,
      nombre: "Auriculares WH-1000XM5",
      marca: "Sony",
      imagen: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
      precio: 1370.68,
    },
    {
      id: 4,
      nombre: "Tablet iPad Air (5ta Gen)",
      marca: "Apple",
      imagen:
        "https://oechsle.vteximg.com.br/arquivos/ids/10067832/image-9b9df413a3b84d7eb875057968d51de7.jpg?v=637943946559270000",
      precio: 2162.39,
    },
    {
      id: 5,
      nombre: 'Monitor UltraSharp 27" 4K',
      marca: "Dell",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4J-7JDDlOcLAarCoY22MmfgSa0CYysl9m8A&s",
      precio: 2346.46,
    },
  ];

  const productosRecienLlegados = [
    {
      id: 6,
      nombre: "Teclado Mecánico K95 RGB",
      marca: "Corsair",
      imagen: "https://ezpc.pe/wp-content/uploads/2022/07/CH-9127414-NA.jpg",
      precio: 721.58,
    },
    {
      id: 7,
      nombre: "Smartwatch Galaxy Watch 6",
      marca: "Samsung",
      imagen: "https://media.falabella.com/falabellaPE/123540248_01/public",
      precio: 1262.47,
    },
    {
      id: 8,
      nombre: "Router Archer AX90",
      marca: "TP-Link",
      imagen:
        "https://http2.mlstatic.com/D_NQ_NP_750021-MLM51328370169_082022-O.webp",
      precio: 829.27,
    },
    {
      id: 9,
      nombre: "Cámara EOS R50 Mirrorless",
      marca: "Canon",
      imagen:
        "https://lenz.pe/cdn/shop/files/Camara-Mirrorless-EOS-R50-Lente-RF-S-18-45mm-f4_5-6_3-IS-STM.jpg?v=1707717382&width=2048",
      precio: 2705.89,
    },
    {
      id: 10,
      nombre: "Disco Duro Externo 2TB",
      marca: "Seagate",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSASfIAPF8sXQ0G9sX-8Yvx5vGX1VWoERBDkA&s",
      precio: 324.86,
    },
  ];

 
  const renderProductCards = (producto) => {
    return (
      <a href={`producto.html?id=${producto.id}`} className="product-card" key={producto.id}>
        <div className="product-image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="product-info">
          <div className="product-details">
            <p className="product-brand">{producto.marca}</p>
            <p className="product-name">{producto.nombre}</p>
            <p className="product-price">S/ {producto.precio.toFixed(2)}</p>
          </div>
          <div className="product-actions">
            <img src="assets/images/icon_addCar.svg" alt="Agregar al carrito" className="add-icon"/>
            <span className="add-text">Comprar</span>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <Header />
      <main>
        <section className="product-section">
          <h2 className="section-title">¡Los más vendidos! 🔥🔥🔥</h2>
          <div className="product-grid">
            {productosMasVendidos.map(producto => renderProductCards(producto))}
          </div>
        </section>

        <section className="product-section">
          <h2 className="section-title">¡Nuestros recién llegados!</h2>
          <div className="product-grid">
            {productosRecienLlegados.map(producto => renderProductCards(producto))}
          </div>
        </section>
      </main>
      <Footer />
    </>  
  );
};

export default Main;