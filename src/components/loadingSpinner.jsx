import { Spinner, Container, Row, Col } from 'react-bootstrap';

function LoadingSpinner({
size = 'md',
text = 'Cargando...',
fullScreen = false,
variant = 'primary'
}) {
const spinnerSizes = {
sm: { width: '1.5rem', height: '1.5rem' },
md: { width: '3rem', height: '3rem' },
lg: { width: '5rem', height: '5rem' }
};
const content = (
<div className="text-center">
<Spinner
animation="border"
role="status"
style={spinnerSizes[size]}
variant={variant}
className="mb-3"
/>
<div>
<span className="text-muted">{text}</span>
</div>
</div>
);
if (fullScreen) {
return (
    <Container fluid className="min-vh-100 d-flex align-items-center
justify-content-center">
<Row>
<Col>
{content}
</Col>
</Row>
</Container>
);
}
return (
<div className="py-5">
{content}
</div>
);
}
export default LoadingSpinner;
