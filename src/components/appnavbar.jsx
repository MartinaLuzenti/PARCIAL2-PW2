import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppNavbar() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MartinaWeb</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Usuarios</Nav.Link>
                        <Nav.Link href="#link">Productos</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppNavbar;
