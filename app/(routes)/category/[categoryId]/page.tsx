import Billboard from '@/components/billboard/Billboard';
import ProductCard from '@/components/products/ProductCard';
import Container from '@/components/ui/Container';
import EmptyState from '@/components/ui/EmptyState';
import Filter from '@/components/ui/Filter';
import MobileFilter from '@/components/ui/MobileFilter';
import getACategory from '@/functions/getACategory';
import getColors from '@/functions/getColors';
import getProducts from '@/functions/getProducts';
import getSizes from '@/functions/getSizes';

interface CategoryPageProps {
    params: {
        categoryId: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params, searchParams }) => {

    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });
    const sizes = await getSizes();
    const colors = await getColors();
    const category = await getACategory(params.categoryId);

    console.log(sizes);

    return (
        <div className='bg-white'>
            <Container>
                <Billboard
                    billboard={category.billboard}
                />
                <div className='px-4 pb-24 sm:px-6 lg:px-8'>
                    <div className='lg:grid lg:gird-cols-5 lg:gap-x-8'>
                        <MobileFilter
                            sizes={sizes}
                            colors={colors}
                        />
                        <div className='hidden lg:block'>
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
                        <div className='mt-6 lg:col-span-4 lg:mt-0'>
                            {products.length === 0 && <EmptyState />}
                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                                {products.map(product => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default CategoryPage;