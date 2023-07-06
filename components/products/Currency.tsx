'use client'

import { useEffect, useState } from 'react';
import { formatter } from '@/lib/uitls';

interface CurrencyProps {
    price?:string | number;
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
        <p className='font-semibold'>
            {formatter.format(Number(price))}
        </p>
    );
}

export default Currency;