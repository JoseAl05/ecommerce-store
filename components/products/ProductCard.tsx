'use client'

import Image from 'next/image';
import { Expand, ShoppingCart } from 'lucide-react';
import { Product } from '@/types/types';
import IconButton from '../ui/IconButton';
import Currency from './Currency';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className='bg-white cursor-pointer rounded-xl border p-3 space-y-4 group'>
            {/* Images and Actions */}
            <div className='aspect-square rounded-xl bg-gray-100 relative'>
                <Image
                    className='aspect-square object-cover rounded-md'
                    alt={product.name}
                    src={product?.images?.[0].url}
                    fill
                />
                <div className='absolute w-full px-6 bottom-5 opacity-0 transition group-hover:opacity-100'>
                    <div className='flex justify-center gap-x-6'>
                        <IconButton
                            onClick={() => { }}
                            icon={<Expand size={20} className='text-gray-600' />}
                        />
                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className='text-gray-600' />}
                        />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className='text-lg font-semibold'>
                    {product.name}
                </p>
                <p className='text-sm text-gray-500'>
                    {product.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className='flex items-center justify-between'>
                <Currency
                    price={product.price}
                />
            </div>
        </div>
    );
}

export default ProductCard;