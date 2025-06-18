import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

function AppNavbar() {
    const isAuthenticated = useAuthStore(state => state.isAuthenticated());
    const logout = useAuthStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Navbar bg="info" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">
                    RollerStore
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/productos">
                            Productos
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {isAuthenticated ? (
                            <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={handleLogout}
                            >
                                Cerrar Sesión
                            </Button>
                        ) : (
                            <NavLink to="/login">
                                <Button variant="primary" size="sm">
                                    Iniciar Sesión
                                </Button>
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;

