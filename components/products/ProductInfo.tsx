'use client'

import { Product } from '@/types/types';
import Currency from './Currency';
import Button from '../ui/Button';
import { ShoppingCart } from 'lucide-react';

interface ProductInfoProps {
    product: Product;
}

const ProductInfo:React.FC<ProductInfoProps> = ({product}) => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-900'>{product.name}</h1>
            <div className='flex items-end justify-between mt-3'>
                <div className='text-2xl text-gray-900'>
                    <Currency
                        price={product.price}
                    />
                </div>
            </div>
            <hr className='my-4'/>
            <div className='flex flex-col gap-y-6'>
                <div className='flex items-center gap-x-4'>
                    <h3 className='font-semibold text-black'>Size:</h3>
                    <p>
                        {product.size.value}
                    </p>
                </div>
                <div className='flex items-center gap-x-4'>
                    <h3 className='font-semibold text-black'>Color:</h3>
                    <div className='h-6 w-6 rounded-full border border-gray-600' style={{backgroundColor:product.color.value}}/>
                </div>
            </div>
            <div className='flex items-center gap-x-3 mt-10'>
                <Button className='flex items-center gap-x-2'>
                    Add To Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}

export default ProductInfo;