import Billboard from '@/components/billboard/Billboard'
import ProductList from '@/components/products/ProductList'
import Container from '@/components/ui/Container'
import getBillboard from '@/functions/getBillboard'
import getProducts from '@/functions/getProducts'
import Image from 'next/image'

export const revalidate = 0;

export default async function Home() {

  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard('244467c2-a529-42bb-8bf5-d33d523c4527');

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard
          billboard={billboard}
        />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
          <ProductList
            title='Featured Products'
            products={products}
          />
        </div>
      </div>
    </Container>
  )
}
