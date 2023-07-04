import qs from 'query-string';
import { Product } from '@/types/types';

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


const getProducts = async (query: Query): Promise<Product[]> => {

    const url = qs.stringify({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            category: query.categoryId,
            isFeatured: query.isFeatured
        },
    })

    const response = await fetch(URL);

    return response.json();
}

export default getProducts;