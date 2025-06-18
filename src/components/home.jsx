import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsStarFill, BsPalette, BsBoxSeam, BsLightning } from 'react-icons/bs';

function Home() {
  const beneficios = [
    {
      icon: <BsStarFill size={35} />,
      titulo: 'Estilo Único',
      texto: 'Patines personalizados'
    },
    {
      icon: <BsBoxSeam size={35} />,
      titulo: 'Envío Seguro',
      texto: 'Paquete especial y seguimiento en tiempo real'
    },
    {
      icon: <BsLightning size={35} />,
      titulo: 'Listos para Rodar',
      texto: 'Armados y listos para usar'
    }
  ];

  const categorias = [
    { nombre: 'Patines Clásicos', emoji: '🛼', productos: '100+' },
    { nombre: 'Accesorios', emoji: '🧰', productos: '50+' },
    { nombre: 'Indumentaria', emoji: '🧢', productos: '30+' },
    { nombre: 'Promos', emoji: '🎁', productos: '20+' }
  ];

  return (
    <>
      {/* Hero */}
      <div className="bg-pink text-white py-5" style={{ backgroundColor: '#ff69b4' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">¡Patiná con estilo!</h1>
              <p className="lead mt-3">
                Descubrí nuestros patines de cuatro ruedas, hechos para destacar.
              </p>
              <div className="d-flex gap-3">
                <NavLink to="/productos">
                  <Button variant="light" size="lg">Ver Productos</Button>
                </NavLink>
                <NavLink to="/personalizar">
                  <Button variant="outline-light" size="lg">
                    Arma tu patin! <BsPalette className="ms-2" />
                  </Button>
                </NavLink>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode400/12487769/12487769-1678276064706-688009fbf9ab3.jpg"
                alt="Patines"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Beneficios */}
      <Container className="my-5">
        <h2 className="text-center mb-4">¿Por qué RollerStore?</h2>
        <Row className="g-4">
          {beneficios.map((b, i) => (
            <Col md={4} key={i}>
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-pink mb-3" style={{ color: '#ff69b4' }}>{b.icon}</div>
                  <Card.Title>{b.titulo}</Card.Title>
                  <Card.Text className="text-muted">{b.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Categorías */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Explorá nuestras categorías</h2>
        <Row className="g-4">
          {categorias.map((cat, index) => (
            <Col sm={6} md={3} key={index}>
              <Card className="text-center h-100 border-0 shadow-sm category-card">
                <Card.Body>
                  <div style={{ fontSize: '3rem' }} className="mb-2">{cat.emoji}</div>
                  <Card.Title>{cat.nombre}</Card.Title>
                  <Badge bg="secondary" className="mb-3">{cat.productos}</Badge>
                  <NavLink to="/productos">
                    <Button variant="outline-secondary" size="sm">Ver más</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA final */}
      <div className="text-center py-5 bg-light">
        <Container>
          <h3 className="mb-3">¿Lista/o para patinar?</h3>
          <p className="text-muted mb-4">
            ¡Unite a nuestra comunidad y encontrá el par perfecto!
          </p>
          <NavLink to="/productos">
            <Button variant="dark" size="lg">Empezar ahora</Button>
          </NavLink>
        </Container>
      </div>

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

