'use client'

import CartProduct from '@/components/products/CartProduct';
import ProductSummary from '@/components/products/ProductSummary';
import Container from '@/components/ui/Container';
import useCart from '@/hooks/useCart';
import { useEffect, useState } from 'react';

export const revalidate = 0;

const CartPage = () => {

    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-16 sm:px-6 lg:px-8'>
                    <h1 className='text-3xl text-black font-bold'>Shopping Cart</h1>
                    <div className='mt-12 gap-x-12 lg:grid lg:grid-cols-12 lg:items-start'>
                        <div className='lg:col-span-7'>
                            {cart.data.length === 0 && (
                                <p className='text-neutral-500'>No items added to cart.</p>
                            )}
                            <ul>
                                {cart.data.map(product => (
                                    <CartProduct
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </ul>
                        </div>
                        <ProductSummary />
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CartPage;