import { Product } from '@/types/types';


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;


const getAProduct = async (id: string): Promise<Product> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
}

export default getAProduct;