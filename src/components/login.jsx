import { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        
    });
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [username]: value
        }));
    };
    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
           
            console.log('Formulario enviado:', formData);
            setShowAlert(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setValidated(false);
        }
        setValidated(true);
    };







    return (<>
        {showAlert && (
            <Alert
                variant="success"
                dismissible
                onClose={() => setShowAlert(false)}
            >
                ¡Logueado correctamente!
            </Alert>
        )}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
               
                    <Form.Group className="mb-3">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            value={formData.username}
                            onChange={handleChange}
                           
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa su Usuario.
                        </Form.Control.Feedback>
                    </Form.Group>
               
                    <Form.Group className="mb-3">
                        <Form.Label>Contrasenia</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingrese su contrasenia.
                        </Form.Control.Feedback>
                    </Form.Group>
               
            </Row>
            
            <Button variant="primary" type="submit" size="lg">
                Ingresar
            </Button>
        </Form>
    </>)
};
export default LoginForm;
