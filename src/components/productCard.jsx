import { Card } from 'react-bootstrap';
import { useState } from 'react';

function ProductCard({ product}) {

    const [isHovered, setIsHovered] = useState(false);

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
                    src={product.imagen}
                    style={{
                        height: '220px',
                        objectFit: 'contain',
                        padding: '1rem'
                    }}
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title
                    className="text-truncate mb-2"
                    style={{ fontSize: '1rem', height: '1.5rem' }}
                    title={product.nombre}
                >
                    {product.nombre}
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
                    {product.descripcion}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center
mb-3">
                    <h5 className="text-success mb-0 fw-bold">
                        ${product.precio}
                    </h5>
                </div>
                
            </Card.Body>
        </Card>
    );
}
export default ProductCard;  
