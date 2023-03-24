import './Gallery.css';
import Button from '../../components/Button';
import React, { useState } from 'react';

// Importa las imágenes aquí
import Naturaleza from '../../Imagenes/Naturaleza.jpg';
import Arquitectura from '../../Imagenes/arquitectura.jpg';
import Deportiva from '../../Imagenes/deportiva.jpg';
import Documental from '../../Imagenes/documental.jpg';
import Aerea from '../../Imagenes/aerea.jpg';

const Gallery = () => {
    const [hoveredImage, setHoveredImage] = useState(-1);

    const images = [
        {
            src: Naturaleza,
            title: 'Naturaleza',
            product: {
                id: 1,
                name: 'Foto de naturaleza',
                price: 100,
                description: 'Una hermosa foto de la naturaleza',
                image: Naturaleza,
            },
        },
        {
            src: Arquitectura,
            title: 'Arquitectura',
            product: {
                id: 2,
                name: 'Foto de arquitectura',
                price: 150,
                description: 'Una impresionante foto de arquitectura',
                image: Arquitectura,
            },
        },
        {
            src: Deportiva,
            title: 'Deportiva',
            product: {
                id: 3,
                name: 'Foto deportiva',
                price: 200,
                description: 'Una emocionante foto deportiva',
                image: Deportiva,
            },
        },
        {
            src: Documental,
            title: 'Documental',
            product: {
                id: 4,
                name: 'Foto documental',
                price: 200,
                description: 'Una interesante foto documental',
                image: Documental,
            },
        },
        {
            src: Aerea,
            title: 'Aerea',
            product: {
                id: 5,
                name: 'Foto aérea',
                price: 250,
                description: 'Una impresionante foto aérea',
                image: Aerea,
            },
        },
        // Agrega más imágenes aquí si es necesario para llenar la cuadrícula
    ];

    const renderImage = (image, index) => (
        <div className="image-container" key={index}>
            <img
                className={`gallery-image ${hoveredImage === index ? 'hovered' : ''}`}
                onMouseOver={() => setHoveredImage(index)}
                onMouseOut={() => setHoveredImage(-1)}
                src={image.src}
                alt={image.title}
            />
            <p className="image-title">{image.title}</p>
            <Button product={image.product} />
            <p className="product-price">${image.product.price}</p>
        </div>
    );


    return (
        <div className="gallery-container">
            <div className="image-grid">
                {images.map(renderImage)}
            </div>
        </div>
    );
};

export default Gallery;










