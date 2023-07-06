'use client'

import usePreviewModal from '@/hooks/usePreviewModal'
import PreviewProductModal from '../products/PreviewProductModal';
import ProductGallery from '../products/ProductGallery';
import ProductInfo from '../products/ProductInfo';

const PreviewModal = () => {

    const previewModal = usePreviewModal();
    const product = usePreviewModal(state => state.data);

    if(!product){
        return null;
    }
    return (
        <PreviewProductModal
            open={previewModal.isOpen}
            onClose={previewModal.onClose}
        >
            <div className='grid grid-cols-1 items-start gap-x-6 gap-y-8 w-full sm:grid-cols-12 lg:gap-x-8'>
                <div className='sm:col-span-4 lg:col-span-5'>
                    <ProductGallery images={product.images}/>
                </div>
                <div className='sm:col-span-8 lg:col-span-7'>
                    <ProductInfo product={product}/>
                </div>
            </div>
        </PreviewProductModal>
    );
}

export default PreviewModal;