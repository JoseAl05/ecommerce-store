import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Button from '../ui/Button';
import Currency from './Currency';
import useCart from '@/hooks/useCart';
import { toast } from 'react-hot-toast';

const ProductSummary = () => {

    const searchParams = useSearchParams();
    const products = useCart(product => product.data);
    const removeAll = useCart(product => product.removeAll);

    useEffect(() => {
        if(searchParams.get('success')){
            toast.success('Payment completed');
            removeAll();
        }

        if(searchParams.get('canceled')){
            toast.error('Something went wrong');
        }
    },[searchParams,removeAll]);

    const totalPrice = products.reduce((total,product) => {
        return total + Number(product.price);
    },0);

    const onCheckout = async() => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`,{
            productIds:products.map(product => product.id)
        });
        window.location = response.data.url;
    };


    return (
        <div className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'>
            <h2 className='text-lg text-gray-900 font-medium'>Order Summary</h2>
            <div className='mt-6 space-y-4'>
                <div className='flex items-center justify-between pt-4 border-t border-gray-200'>
                    <p className='text-base text-gray-900 font-medium'>
                        Total Order
                    </p>
                    <Currency price={totalPrice}/>
                </div>
            </div>
            <Button disabled={products.length === 0} onClick={onCheckout} className='w-full mt-6'>
                Checkout
            </Button>
        </div>
    );
}

export default ProductSummary;