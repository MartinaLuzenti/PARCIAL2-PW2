import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import { Navigate } from 'react-router-dom';
import LoginForm from './components/login'
import ProductGrid from './components/productGrid'
import AppNavbar from './components/appnavbar';
import Home from './components/home';


function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token') !== null;
  if (isAuthenticated === false) {
  // Redirigir a login si no está autenticado
  return <Navigate to="/login" replace />;
  }
  return children;
}


  return (
    <>
      {!hideNavbar && <AppNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/productos" element={<ProtectedRoute><ProductGrid /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
