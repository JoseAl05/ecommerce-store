import ProductGallery from '@/components/products/ProductGallery';
import ProductInfo from '@/components/products/ProductInfo';
import ProductList from '@/components/products/ProductList';
import Container from '@/components/ui/Container';
import getAProduct from '@/functions/getAProduct';
import getProducts from '@/functions/getProducts';

interface ProductPageProps {
    params: {
        productId: string;
    }
}


export const revalidate = 0;

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {

    const product = await getAProduct(params.productId);

    const suggestedProduct = await getProducts({
        categoryId: product?.category?.id
    })

    if (!product) {
        return null;
    }

    return (
        <div className='bg-white'>
            <Container>
                <div className='px-4 py-10 sm:px-6 lg:px-8'>
                    <div className='lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8'>
                        <ProductGallery
                            images={product.images}
                        />
                        <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                            <ProductInfo
                                product={product}
                            />
                        </div>
                    </div>
                    <hr className='my-10' />
                    <ProductList
                        title='Related items'
                        products={suggestedProduct}
                    />
                </div>
            </Container>
        </div>
    );
}

export default ProductPage;