'use client'

import { useEffect, useState } from 'react';
import { formatter } from '@/lib/uitls';

interface CurrencyProps {
    price:string;
}

const Currency:React.FC<CurrencyProps> = ({price}) => {

    const [isMounted,setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }


    return (
        <div className='font-semibold'>
            {formatter.format(Number(price))}
        </div>
    );
}

export default Currency;