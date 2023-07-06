import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from '@/types/types';
import { toast } from 'react-hot-toast';


interface IUseCartProps {
    data: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<IUseCartProps>((set, get) => ({
        data: [],
        addItem: (product: Product) => {
            const currentProduct = get().data;
            const existingProduct = currentProduct.find(currentProduct => currentProduct.id === product.id);

            if (existingProduct) {
                return toast('Product already in cart. ⚠️');
            }

            set({ data: [...get().data, product] });
            toast.success('Item added to cart');
        },
        removeItem: (id: string) => {
            set({ data: [...get().data.filter(data => data.id !== id)] });
            toast.success('Product removed from the cart.');
        },
        removeAll: () => {
            set({ data: [] });
        }
    }),{
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;