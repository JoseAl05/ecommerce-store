'use client'

import { Image as ImageType } from '@/types/types';
import { Tab } from '@headlessui/react';
import ProductGalleryTab from './ProductGalleryTab';
import Image from 'next/image';

interface ProductGalleryProps {
    images: ImageType[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    return (
        <Tab.Group as='div' className='flex flex-col-reverse'>
            <div className='mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none'>
                <Tab.List className='grid grid-cols-4 gap-6'>
                    {images.map(image => (
                        <ProductGalleryTab
                            key={image.id}
                            image={image}
                        />
                    ))}
                </Tab.List>
            </div>
            <Tab.Panels className='aspect-square w-full'>
                {images.map(image => (
                    <Tab.Panel key={image.id}>
                        <div className='relative h-full w-full aspect-square overflow-hidden sm:rounded-lg'>
                            <Image
                                alt='Image'
                                src={image.url}
                                className='object-cover object-center'
                                fill
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
}

export default ProductGallery;