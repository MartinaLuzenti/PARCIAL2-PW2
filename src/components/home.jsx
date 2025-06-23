import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { BsStarFill, BsPalette, BsBoxSeam, BsLightning } from 'react-icons/bs';

import styles from './Home.module.css'; // Import your CSS module

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

  

  return (
    <>
      {/* Hero */}
      {/* <div className="bg-pink text-white py-5" style={{ backgroundColor: '#ff69b4' }}> */}
      <div className={styles.container}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className={styles.title}>¡Patiná con estilo!</h1>
              <p className={styles.description}>
                Descubrí nuestros patines de cuatro ruedas, hechos para destacar.
              </p>
              <div className="d-flex gap-3">
                <NavLink to="/productos">
                  <Button className={styles.btnPrimary}>Ver Productos</Button>
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

     <Container className="my-5">
        <h2 className={styles.titleContainer}>¿Por qué RollerStore?</h2>
        <Row className="g-4">
          {beneficios.map((b, i) => (
            <Col md={4} key={i}>
              <Card className={styles.cardHome}>
                <Card.Body>
                  <div className={styles.textPink}>{b.icon}</div>
                  <Card.Title>{b.titulo}</Card.Title>
                  <Card.Text className={styles.cardText}>{b.texto}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className={styles.startWithUs}>
        <Container>
          <h3 className={styles.startWithUsTile}>¿Lista/o para patinar?</h3>
          <p className={styles.startWithUsDescription}>
            ¡Unite a nuestra comunidad y encontrá el par perfecto!
          </p>
          <NavLink to="/productos">
            <Button className={styles.btnPrimary} size="lg">Empezar ahora</Button>
          </NavLink>
        </Container>
      </div>
    </>
  );
}

export default Home;



