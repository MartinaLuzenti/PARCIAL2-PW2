import { Card, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsCart, BsHeart, BsStar, BsEye } from 'react-icons/bs';
import { useState } from 'react';
function ProductCard({ product, onAddToCart, onViewDetails }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const handleToggleFavorite = () => {
        setIsFavorite(!isFavorite);
        // Aquí podrías integrar con el store para manejar favoritos
    };
    const renderRating = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            stars.push(
                <BsStar
                    key={i}
                    className={i < fullStars ? 'text-warning' : 'text-muted'}
                    size={12}
                />
            );
        }
        return stars;
    };
    return (
        <Card
            className={`h-100 shadow-sm border-0 ${isHovered ? 'shadow-lg' :
                ''}`}
            style={{
                transition: 'all 0.3s ease',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="position-relative">
                <Card.Img
                    variant="top"
                    src={product.image}
                    style={{
                        height: '220px',
                        objectFit: 'contain',
                        padding: '1rem'
                    }}
                />
                {/* Badge de categoría */}
                <Badge
                    bg="primary"
                    className="position-absolute top-0 start-0 m-2"
                    style={{ fontSize: '0.7rem' }}
                >
                    {product.category}
                </Badge>
                {/* Botón de favorito */}
                <Button
                    variant={isFavorite ? "danger" : "outline-secondary"}
                    size="sm"
                    className="position-absolute top-0 end-0 m-2 rounded-circle"
                    style={{ width: '35px', height: '35px' }}
                    onClick={handleToggleFavorite}
                >
                    <BsHeart size={14} />
                </Button>
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title
                    className="text-truncate mb-2"
                    style={{ fontSize: '1rem', height: '1.5rem' }}
                    title={product.title}
                >
                    {product.title}
                </Card.Title>
                <Card.Text
                    className="text-muted small flex-grow-1"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}
                >
                    {product.description}
                </Card.Text>
                {/* Rating */}
                {product.rating && (
                    <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                            {renderRating(product.rating.rate)}
                        </div>
                        <small className="text-muted">
                            ({product.rating.count} reseñas)
                        </small>
                    </div>
                )}
                {/* Precio */}
                <div className="d-flex justify-content-between align-items-center
mb-3">
                    <h5 className="text-success mb-0 fw-bold">
                        ${product.price}
                    </h5>
                </div>
                {/* Botones de acción */}
                <div className="d-flex gap-2">
                    <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip>Ver detalles</Tooltip>}
                    >
                        <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => onViewDetails?.(product)}
                        >
                            <BsEye />
                        </Button>
                    </OverlayTrigger>
                    <Button
                        variant="primary"
                        size="sm"
                        className="flex-grow-1"
                        onClick={() => onAddToCart(product)}
                    >
                        <BsCart className="me-1" />
                        Agregar al Carrito
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}
export default ProductCard;  