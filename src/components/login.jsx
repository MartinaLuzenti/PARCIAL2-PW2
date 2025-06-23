import { useState } from 'react';
import { Form, Button, Alert, Row, Container } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import styles from './login.module.css';

function LoginForm() {
    const { login } = useAuthStore();

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',

    });
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = async (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const res = await login(formData.username, formData.password);
            if (res.success) {
                console.log('Formulario enviado:', formData);
                setShowAlert(false);
                setFormData({ username: '', password: '' });
                setValidated(false);
                navigate('/productos');
            }
            else {
                setShowAlert(true);
            }

        }
        setValidated(true);
    };


    return (<>
        {showAlert && (
            <Alert
                variant="danger"
                dismissible
                onClose={() => setShowAlert(false)}
            >
                Usuario o contraseña invalido
            </Alert>
        )}
        <Alert variant="info">
            Para ver nuestros productos tenes que estar logueado
        </Alert>
        <Container>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>

                <Form.Group className="mb-3">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}

                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingresa su usuario.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}

                    />
                    <Form.Control.Feedback type="invalid">
                        Por favor ingrese su contraseña.
                    </Form.Control.Feedback>
                </Form.Group>

            </Row>

            <div className="d-flex justify-content-center gap-2">
                 <NavLink to="/">
                    <Button  className={styles.btnSecondary} type="button" size="lg">Volver</Button>
                </NavLink>
                <Button className={styles.btnPrimary} type="submit" size="lg">
                    Ingresar
                </Button>
            </div>
        </Form>
    </Container>
    </>)
};
export default LoginForm;

