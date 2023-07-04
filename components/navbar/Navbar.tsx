import Link from 'next/link';
import getCategories from '@/functions/getCategories';
import Container from '../ui/Container';
import NavItems from './NavItems';
import NavActions from './NavActions';

const Navbar = async() => {

    const categories = await getCategories();

    return (
        <div className='border-b'>
            <Container>
                <div className='relative flex items-center h-16 px-4 sm:px-6 lg:px-8'>
                    <Link href='/' className='flex ml-4 lg:ml-0 gap-x-2'>
                        <p className='font-bold text-xl uppercase'>Store</p>
                    </Link>
                    <NavItems data={categories}/>
                    <NavActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;