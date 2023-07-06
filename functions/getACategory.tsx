import { Category } from '@/types/types';


const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;


const getACategory = async (id: string): Promise<Category> => {
    const response = await fetch(`${URL}/${id}`);

    return response.json();
}

export default getACategory;