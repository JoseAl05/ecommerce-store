'use client'

import { ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import { useEffect, useState } from 'react';
import useCart from '@/hooks/useCart';
import { useRouter } from 'next/navigation';

const NavActions = () => {

    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div className='flex items-center gap-x-4 ml-auto'>
            <Button
                onClick={() => router.push('/cart')}
                className='flex items-center rounded-full bg-black px-4 py-2'
            >
                <ShoppingBag
                    size={20}
                    color='white'
                />
                <span className='text-white text-sm font-medium ml-2'>
                    {cart.data.length}
                </span>
            </Button>
        </div>
    );
}

export default NavActions;