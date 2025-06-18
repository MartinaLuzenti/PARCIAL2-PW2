import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import productos from '../data/productos.json';

export const useStore = create(
    subscribeWithSelector(
        persist(
            (set, get) => ({
                products: [],
                productsLoading: false,
                searchTerm: '',
                loadProducts: async () => {
                    if (get().productsLoading) return;
                    set({ productsLoading: true });
                    try {
                        const products = productos;
                        set({
                            products,
                            productsLoading: false
                        });
                    } catch (error) {
                        console.error('Error al cargar productos:', error);
                        set({ productsLoading: false });
                    }
                },
                setSearchTerm: (term) => set({ searchTerm: term }),
                filteredProducts: () => {
                    const { products, searchTerm } = get();
                    return products.filter(product =>
                        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
            }),
            {
                name: 'ecommerce-storage',
                partialize: (state) => ({
                    cartItems: state.cartItems
                })
            }
        )
    )
);
