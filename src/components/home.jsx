import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsArrowRight, BsShop, BsShield, BsTruck } from 'react-icons/bs';

function Home() {
    
    const features = [
        {
        icon: <BsShop size={40} />,
        title: 'Amplio Catálogo',
        description: 'Miles de productos de tecnología de las mejores marcas'
        },
        {
        icon: <BsShield size={40} />,
        title: 'Compra Segura',
        description: 'Pagos seguros y protección al comprador garantizada'
        },
        {
        icon: <BsTruck size={40} />,
        title: 'Envío Gratis',
        description: 'Envío gratuito en compras superiores a $50'
        }
        ];
    
return(
<>
{/* Hero Section */}
<div className="bg-primary text-white py-5 mb-5">
<Container>
<Row className="align-items-center">
<Col lg={6}>
<h1 className="display-4 fw-bold mb-4">
Bienvenido a TechStore
</h1>
<p className="lead mb-4">
Descubre los mejores productos de tecnología con precios
increíbles.
Desde dispositivos electrónicos hasta accesorios de
última generación.
</p>
<div className="d-flex gap-3">
<NavLink to="/productos">
<Button variant="light" size="lg">
Ver Productos
<BsArrowRight className="ms-2" />
</Button>
</NavLink>
<Button variant="outline-light" size="lg">
Ofertas Especiales
</Button>
</div>
</Col>
<Col lg={6} className="text-center">
<div className="display-1" style={{ fontSize: '8rem',
opacity: 0.3 }}>
🛍️
</div>
</Col>
</Row>
</Container>
</div>
<Container>
{/* Features Section */}
<Row className="mb-5">
<Col>
<h2 className="text-center mb-5">¿Por qué elegirnos?</h2>
</Col>
</Row>
<Row className="g-4 mb-5">
{features.map((feature, index) => (
<Col md={4} key={index}>
<Card className="text-center h-100 border-0 shadow-sm">
<Card.Body className="p-4">
<div className="text-primary mb-3">
{feature.icon}
</div>
<Card.Title>{feature.title}</Card.Title>
<Card.Text className="text-muted">
{feature.description}
</Card.Text>
</Card.Body>
</Card>
</Col>
))}
</Row>
{/* Categories Section */}
<Row className="mb-5">
<Col>
<h2 className="text-center mb-5">Categorías Populares</h2>
</Col>
</Row>
<Row className="g-4 mb-5">
{[
{ name: 'Electrónicos', emoji: '📱', count: '250+ productos'
},
{ name: 'Joyería', emoji: '💎', count: '150+ productos' },
{ name: 'Ropa Hombre', emoji: '👔', count: '300+ productos'
},
{ name: 'Ropa Mujer', emoji: '👗', count: '400+ productos' }
].map((category, index) => (
<Col sm={6} md={3} key={index}>
<Card className="text-center h-100 border-0 shadow-sm
category-card">
<Card.Body className="p-4">
<div style={{ fontSize: '3rem' }} className="mb-3">
{category.emoji}
</div>
<Card.Title className="h5">{category.name}</Card.Title>
<Badge bg="primary" className="mb-3">
{category.count}
</Badge>
<div>
<NavLink to="/productos">
<Button variant="outline-primary" size="sm">
Explorar
</Button>
</NavLink>
</div>
</Card.Body>
</Card>
</Col>
))}
</Row>
{/* CTA Section */}
<Row className="mb-5">
<Col>
<Card className="bg-light border-0 text-center">
<Card.Body className="py-5">
<h3 className="mb-3">¿Listo para comenzar?</h3>
<p className="text-muted mb-4">
Únete a miles de clientes satisfechos y encuentra todo
lo que necesitas
</p>
<NavLink to="/productos">
<Button variant="primary" size="lg">
Explorar Productos
<BsArrowRight className="ms-2" />
</Button>
</NavLink>
</Card.Body>
</Card>
</Col>
</Row>
</Container>
<style jsx>{`
.category-card {
transition: transform 0.2s ease-in-out;
cursor: pointer;
}
.category-card:hover {
transform: translateY(-5px);
}
`}</style>
</>
);
    }

export default Home;
