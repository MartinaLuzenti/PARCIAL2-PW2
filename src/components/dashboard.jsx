import { useAuthStore } from '../stores/authStore';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();
    const isAuthenticated = useAuthStore(state => state.isAuthenticated());

    if (!isAuthenticated) {
        navigate('/login');
    }



    return (
        <>
            Aca van a estar los productos
        </>
    );

}
export default Dashboard;