import { Navbar, Nav, Container, Badge, Dropdown, Button, Form } from
    'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BsCart, BsPerson, BsSearch, BsMoon, BsSun } from 'react-icons/bs';
import { useStore } from '../stores/useStore';
import { useState } from 'react';
function AppNavbar() {
    const {
        user,
        logout,
        cartItemCount,
        isAuthenticated,
        setShowCart,
        searchTerm,
        setSearchTerm
    } = useStore();
    const [searchInput, setSearchInput] = useState(searchTerm);
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
    };
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top"
            className="shadow">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="fw-bold fs-3">🛍️
                        TechStore
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Inicio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Productos</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    {/* Barra de búsqueda */}
                    <Form className="d-flex me-3" onSubmit={handleSearch}>
                        <Form.Control
                            type="search"
                            placeholder="Buscar productos..."
                            className="me-2"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            style={{ width: '250px' }}
                        />
                        <Button variant="outline-light" type="submit">
                            <BsSearch />
                        </Button>
                    </Form>
                    <Nav className="align-items-center">
                        {/* Toggle theme */}
                        
                        {/* Usuario */}
                        {isAuthenticated ? (
                            <Dropdown align="end">
                                <Dropdown.Toggle variant="outline-light" id="user-
dropdown">
                                    <img
                                        src={user.avatar}
                                        alt={user.name}
                                        width="24"
                                        height="24"
                                        className="rounded-circle me-2"
                                    />
                                    {user.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.ItemText>
                                        <small className="text-muted">{user.email}</small>
                                    </Dropdown.ItemText>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="/profile">
                                        👤 Mi Perfil
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/orders">
                                        📦 Mis Pedidos
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={logout} className="text-
danger">
                                        🚪 Cerrar Sesión
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <LinkContainer to="/login">
                                <Button variant="primary">
                                    <BsPerson size={20} className="me-1" />
                                    Iniciar Sesión
                                </Button>
                            </LinkContainer>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppNavbar;