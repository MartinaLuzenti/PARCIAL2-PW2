import { Routes, Route } from 'react-router-dom';
import './App.css'
import LoginForm from './components/login'
import ProductGrid from './components/productGrid'
import UserGrid from './components/userGrid'
import AppNavbar from './components/appNavbar'
import Dashboard from './components/dashboard'


function App() {
  

  return (
   <Routes>
<Route path="/" element={<LoginForm />} />
<Route path="/productos" element={<ProductGrid />} />
<Route path="/usuarios" element={<UserGrid />} />
<Route path="/principal" element={<Dashboard />} />
</Routes>
    
  )
}

export default App
