import { useStore } from '../stores/useStore';
import { useEffect } from 'react';
import LoadingSpinner from './loadingSpinner';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import ProductCard from '../components/productCard';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

function ProductGrid() {
    const navigate = useNavigate();
    const isAuthenticated = useAuthStore(state => state.isAuthenticated());

    if (!isAuthenticated) {
        navigate('/login');
    }
    const {
        products,
        filteredProducts,
        productsLoading,
        searchTerm,
        setSearchTerm,
        loadProducts
    } = useStore();

    useEffect(() => {
        if (!products.length && !productsLoading) {
            loadProducts();
        }
    }, [products.length, productsLoading, loadProducts]);

    const handleViewDetails = (product) => {
        console.log('Ver detalles de:', product.nombre);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    if (productsLoading) {
        return <LoadingSpinner size="lg" text="Cargando productos..." />;
    }

    return (
        <Container className="py-4">
            {/* Filtros */}
            <Card className="mb-4 border-0 shadow-sm">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h5 className="mb-0">
                                Productos
                                
                            </h5>
                        </Col>
                        <Col md={6}>
                            <Form.Control
                                type="text"
                                placeholder="Buscar por nombre"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* Contador de productos */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="text-muted mb-0">
                    Mostrando {filteredProducts().length} productos
                </p>
                {searchTerm && (
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => setSearchTerm('')}
                    >
                        Limpiar filtros
                    </Button>
                )}
            </div>
            {/* Grid de productos */}
            {filteredProducts().length === 0 ? (
                <Card className="text-center py-5 border-0 shadow-sm">
                    <Card.Body>
                        <h4 className="text-muted">No se encontraron productos</h4>
                        <p className="text-muted">
                            Intenta ajustar tus filtros de búsqueda
                        </p>
                    </Card.Body>
                </Card>
            ) : (
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {filteredProducts().map(product => (
                        <Col key={product.nombre}>
                            <ProductCard
                                product={product}
                                onViewDetails={handleViewDetails}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default ProductGrid;

