import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ModalCarousel.css';

// Asegurarse de que Modal sepa cuál es el elemento raíz de la aplicación
Modal.setAppElement('#root');

const ModalCarousel = ({ isOpen, onRequestClose, images, title, description, initialSlide = 0 }) => {
    const [enlargedImage, setEnlargedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const enlargedViewRef = useRef(null);
    const sliderRef = useRef(null);
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: initialSlide,
        afterChange: (current) => setCurrentImageIndex(current),
        lazyLoad: 'ondemand',
    };

    // Manejar teclas para navegación y cierre
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (enlargedImage) {
                // En la vista ampliada
                if (e.key === 'Escape') {
                    closeEnlargedView();
                } else if (e.key === 'ArrowRight') {
                    navigateImages('next');
                } else if (e.key === 'ArrowLeft') {
                    navigateImages('prev');
                }
            } else if (isOpen) {
                // En el carrusel normal
                if (e.key === 'Escape') {
                    onRequestClose();
                } else if (e.key === 'ArrowRight' && sliderRef.current) {
                    sliderRef.current.slickNext();
                } else if (e.key === 'ArrowLeft' && sliderRef.current) {
                    sliderRef.current.slickPrev();
                }
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [enlargedImage, isOpen, onRequestClose]);

    // Scroll al inicio cuando cambia la imagen
    useEffect(() => {
        if (enlargedViewRef.current && enlargedImage) {
            enlargedViewRef.current.scrollTop = 0;
        }
    }, [enlargedImage]);

    const openEnlargedView = (image, index) => {
        setEnlargedImage(image);
        setCurrentImageIndex(index);
        // Asegurarse de que el modal tenga el estilo correcto
        document.body.style.overflow = 'hidden';
    };

    const closeEnlargedView = () => {
        setEnlargedImage(null);
        document.body.style.overflow = '';
    };

    const handleCloseModal = (e) => {
        // Detener la propagación para evitar conflictos con otros manejadores de eventos
        e.stopPropagation();
        onRequestClose();
    };

    const navigateImages = (direction) => {
        let newIndex = currentImageIndex;
        
        if (direction === 'next') {
            newIndex = (currentImageIndex + 1) % images.length;
        } else {
            newIndex = (currentImageIndex - 1 + images.length) % images.length;
        }
        
        setCurrentImageIndex(newIndex);
        setEnlargedImage(images[newIndex]);
    };

    // Si no hay imágenes, no mostrar nada
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={`custom-modal ${enlargedImage ? 'enlarged-modal' : ''}`}
            overlayClassName={enlargedImage ? 'enlarged-overlay' : ''}
            shouldCloseOnOverlayClick={true}
            closeTimeoutMS={300}
        >
            {enlargedImage ? (
                <div 
                    className="enlarged-view" 
                    onClick={closeEnlargedView}
                    ref={enlargedViewRef}
                >
                    <div className="navigation-controls">
                        <button 
                            className="nav-button prev-button" 
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages('prev');
                            }}
                            aria-label="Imagen anterior"
                        >
                            &#10094;
                        </button>
                        <button 
                            className="nav-button next-button" 
                            onClick={(e) => {
                                e.stopPropagation();
                                navigateImages('next');
                            }}
                            aria-label="Imagen siguiente"
                        >
                            &#10095;
                        </button>
                    </div>
                    
                    <div className="image-container">
                        <img 
                            src={enlargedImage} 
                            alt={`Vista ampliada ${currentImageIndex + 1} de ${images.length}`} 
                            className="enlarged-image" 
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    
                    <div className="enlarged-controls">
                        <span className="image-counter">{currentImageIndex + 1} / {images.length}</span>
                        <button 
                            className="close-button" 
                            onClick={(e) => {
                                e.stopPropagation();
                                closeEnlargedView();
                            }}
                            aria-label="Cerrar vista ampliada"
                        >
                            &times;
                        </button>
                        <div className="keyboard-nav-hint">
                            Use <span className="key-icon">←</span> <span className="key-icon">→</span> to navigate
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="carousel-slide">
                                <img 
                                    src={image} 
                                    alt={`Imagen ${index + 1} de ${images.length}`} 
                                    onClick={() => openEnlargedView(image, index)}
                                    style={{ cursor: 'zoom-in' }}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </Slider>
                    <h3 className="slide-title">{title}</h3>
                    <p className="slide-description">{description}</p>
                    <button 
                        className='closingButton' 
                        onClick={handleCloseModal}
                        aria-label="Cerrar carrusel"
                        type="button"
                    >
                        close
                    </button>
                    <div className="keyboard-nav-hint">
                        Use <span className="key-icon">←</span> <span className="key-icon">→</span> to navigate
                    </div>
                </>
            )}
        </Modal>
    );
};

export default ModalCarousel;
