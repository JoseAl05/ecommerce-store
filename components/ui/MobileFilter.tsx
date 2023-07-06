'use client'

import { Color, Size } from '@/types/types';
import { useState } from 'react';
import Button from './Button';
import { Plus, X } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import IconButton from './IconButton';
import Filter from './Filter';

interface MobileFilterProps {
    sizes: Size[];
    colors: Color[];
}


const MobileFilter: React.FC<MobileFilterProps> = ({ sizes, colors }) => {

    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button onClick={onOpen} className='flex items-center gap-x-2 lg:hidden'>
                Filters
                <Plus size={20} />
            </Button>
            <Dialog as='div' open={open} className='relative z-40 lg:hidden' onClose={onClose}>
                <div className='fixed inset-0 bg-black bg-opacity-25' />
                <div className='fixed flex inset-0 z-40'>
                    <Dialog.Panel className='relative flex flex-col h-full w-full py-4 pb-6 ml-auto max-w-xs overflow-y-auto bg-white shadow-xl'>
                        <div className='flex items-center justify-end px-4'>
                            <IconButton
                                icon={<X scale={15} />}
                                onClick={onClose}
                            />
                        </div>
                        <div className='p-4'>
                            <Filter
                                valueKey='sizeId'
                                name='Sizes'
                                data={sizes}
                            />
                            <Filter
                                valueKey='colorId'
                                name='Colors'
                                data={colors}
                            />
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

export default MobileFilter;