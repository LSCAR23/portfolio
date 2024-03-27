import React from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ModalCarousel.css';

const ModalCarousel = ({ isOpen, onRequestClose, images, title, description }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="custom-modal"
        >
            
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </Slider>
            <h3 className="slide-title">{title}</h3>
            <p className="slide-description">{description}</p>
            <button className='closingButton' onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default ModalCarousel;
