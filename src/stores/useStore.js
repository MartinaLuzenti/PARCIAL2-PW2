import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
export const useStore = create(
subscribeWithSelector(
persist(
(set, get) => ({
// Estado de autenticación
user: null,
authLoading: false,
// Estado del carrito
cartItems: [],
showCart: false,
// Estado de productos
products: [],
productsLoading: false,
categories: [],
selectedCategory: '',
searchTerm: '',
// Estado de notificaciones
notifications: [],
// Acciones de autenticación
login: async (email, password) => {
set({ authLoading: true });
try {
// Simulación de login
await new Promise(resolve => setTimeout(resolve, 1500));
if (email === 'admin@test.com' && password === 'admin123') {
const user = {
id: 1,
name: 'Administrador',
email,
role: 'admin',
avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
};
set({ user, authLoading: false });
get().addNotification('¡Bienvenido! Sesión iniciada correctamente', 'success');
return { success: true };
} else {
set({ authLoading: false });
get().addNotification('Credenciales incorrectas', 'error');
return { success: false, error: 'Credenciales inválidas' };
}
} catch (error) {
set({ authLoading: false });
get().addNotification('Error de conexión', 'error');
return { success: false, error: 'Error de conexión' };
}
},
logout: () => {
set({ user: null, cartItems: [] });
get().addNotification('Sesión cerrada correctamente', 'info');
},
// Acciones del carrito
addToCart: (product) => {
const { cartItems, user } = get();
if (!user) {
get().addNotification('Debes iniciar sesión para agregar productos', 'warning');
return;
}
const existingItem = cartItems.find(item => item.id ===
product.id);
if (existingItem) {
set({
cartItems: cartItems.map(item =>
item.id === product.id
? { ...item, quantity: item.quantity + 1 }
: item
)
});
get().addNotification(`Cantidad actualizada:
${product.title}`, 'success');
} else {
set({
cartItems: [...cartItems, { ...product, quantity: 1 }]
});
get().addNotification(`Producto agregado: ${product.title}`,
'success');
}
},
updateCartQuantity: (productId, quantity) => {
if (quantity <= 0) {
get().removeFromCart(productId);
return;
}
set(state => ({
cartItems: state.cartItems.map(item =>
item.id === productId ? { ...item, quantity } : item
)
}));
},
removeFromCart: (productId) => {
const product = get().cartItems.find(item => item.id ===
productId);
set(state => ({
cartItems: state.cartItems.filter(item => item.id !==
productId)
}));
get().addNotification(`Producto eliminado: ${product?.title}`,
'info');
},
clearCart: () => {
set({ cartItems: [] });
get().addNotification('Carrito vaciado', 'info');
},
setShowCart: (show) => set({ showCart: show }),
// Acciones de productos
loadProducts: async () => {
set({ productsLoading: true });
try {
const response = await
fetch('https://fakestoreapi.com/products');
const products = await response.json();
// Extraer categorías únicas
const categories = [...new Set(products.map(p =>
p.category))];
set({
products,
categories,
productsLoading: false
});
} catch (error) {
set({ productsLoading: false });
get().addNotification('Error al cargar productos', 'error');
}
},
setSelectedCategory: (category) => set({ selectedCategory:
category }),
setSearchTerm: (term) => set({ searchTerm: term }),
// Acciones de notificaciones
addNotification: (message, type = 'info') => {
const id = Date.now() + Math.random();
const notification = { id, message, type, timestamp: new Date()
};
set(state => ({
notifications: [...state.notifications, notification]
}));
// Auto-eliminar después de 5 segundos
setTimeout(() => {
get().removeNotification(id);
}, 5000);
},
removeNotification: (id) => {
set(state => ({
notifications: state.notifications.filter(n => n.id !== id)
}));
},
// Getters computados
get cartTotal() {
return get().cartItems.reduce(
    (sum, item) => sum + (item.price * item.quantity),
0
);
},
get cartItemCount() {
return get().cartItems.reduce(
(sum, item) => sum + item.quantity,
0
);
},
get filteredProducts() {
const { products, selectedCategory, searchTerm } = get();
return products.filter(product => {
const matchesCategory = !selectedCategory || product.category
=== selectedCategory;
const matchesSearch = !searchTerm ||
product.title.toLowerCase().includes(searchTerm.toLowerCase
()) ||
product.description.toLowerCase().includes(searchTerm.toLowerCase());
return matchesCategory && matchesSearch;
});
},
get isAuthenticated() {
return !!get().user;
}
}),
{
name: 'ecommerce-storage',
partialize: (state) => ({
user: state.user,
cartItems: state.cartItems
})
}
)
)
);
// Suscripción para analytics de carrito
useStore.subscribe(
(state) => state.cartItems,
(cartItems) => {
console.log('🛒 Carrito actualizado:', {
    items: cartItems.length,
total: cartItems.reduce((sum, item) => sum + (item.price *
item.quantity), 0)
});
}
);