
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useStore } from '../stores/useStore';
import { useEffect } from 'react';
import ProductCard from './ProductCard';

import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';
function ProductGrid() {

    const navigate = useNavigate();
    const isAuthenticated = useAuthStore(state => state.isAuthenticated());

    if (!isAuthenticated) {
        navigate('/login');
        }

    const {
        filteredProducts,
        productsLoading,
        categories,
        selectedCategory,
        setSelectedCategory,
        searchTerm,
        addToCart,
        loadProducts
    } = useStore();
    useEffect(() => {
        if (!filteredProducts.length && !productsLoading) {
            loadProducts();
        }
    }, [loadProducts, filteredProducts.length, productsLoading]);
    const handleViewDetails = (product) => {
        // Aquí podrías navegar a una página de detalles
        console.log('Ver detalles de:', product.title);
    };
    if (productsLoading) {
        return "Cargando productos..." ;
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
                                {searchTerm && (
                                    <small className="text-muted ms-2">
                                        (buscando: "{searchTerm}")
                                    </small>
                                )}
                            </h5>
                        </Col>
                        <Col md={6}>
                            <Form.Select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-auto ms-auto"
                            >
                                <option value="">Todas las categorías</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {category.charAt(0).toUpperCase() +
                                            category.slice(1)}
                                    </option>
                                ))}
                            </Form.Select>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* Contador de productos */}
            <div className="d-flex justify-content-between align-items-center
mb-4">
                <p className="text-muted mb-0">
                    Mostrando {filteredProducts.length} productos
                </p>
                {(selectedCategory || searchTerm) && (
                    <Button
                        variant="outline-secondary"
                        size="sm"
                        onClick={() => {
                            setSelectedCategory('');
                            // Limpiar búsqueda si es necesario
                        }}
                    >
                        Limpiar filtros
                    </Button>
                )}
            </div>
            {/* Grid de productos */}
            {filteredProducts.length === 0 ? (
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
                    {filteredProducts.map(product => (
                        <Col key={product.id}>
                            <ProductCard
                                product={product}
                                onAddToCart={addToCart}
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
