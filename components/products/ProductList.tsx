import { Product } from '@/types/types';
import EmptyState from '../ui/EmptyState';
import ProductCard from './ProductCard';

interface ProductListProps {
    title:string;
    products: Product[];
}

const ProductList:React.FC<ProductListProps> = ({title,products}) => {
    return (
        <div className='space-y-4'>
            <h3 className='text-3xl font-bold'>{title}</h3>
            {products.length === 0 && <EmptyState />}
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;