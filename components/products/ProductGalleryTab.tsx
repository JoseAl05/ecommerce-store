'use client'

import Image from 'next/image';
import { Image as ImageType } from '@/types/types';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/uitls';


interface ProductGalleryTabProps {
    image: ImageType;
}

const ProductGalleryTab:React.FC<ProductGalleryTabProps> = ({image}) => {
    return (
        <Tab className='relative flex items-center justify-center rounded-md aspect-square cursor-pointer bg-white'>
            {({ selected }) => (
                <div>
                    <span className='absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md'>
                        <Image
                            alt=''
                            src={image.url}
                            className='object-cover object-center'
                            fill
                        />
                    </span>
                    <span className={cn(
                        'absolute inset-0 rounded-md ring-2 ring-offset-2',
                        selected ? 'ring-black' : 'ring-transparent'
                    )}/>
                </div>
            )}
        </Tab>
    );
}

export default ProductGalleryTab;