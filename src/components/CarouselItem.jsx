import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/3889873/pexels-photo-3889873.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Imagen" />
        <div className="carousel-item__details">
            <img className="carousel-item__details--icon" src={playIcon} alt="play" />
            <img className="carousel-item__details--icon" src={plusIcon} alt="plus" />
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;