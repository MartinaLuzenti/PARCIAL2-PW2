import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import LoginForm from './components/login'
import ProductGrid from './components/productGrid'
import UserGrid from './components/userGrid'
import Dashboard from './components/dashboard'
import AppNavbar from './components/appnavbar';
import Home from './components/home';


function App() {

  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/';

  return (
    <>
      {!hideNavbar && <AppNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/productos" element={<ProductGrid />} />
        <Route path="/usuarios" element={<UserGrid />} />
        <Route path="/principal" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
