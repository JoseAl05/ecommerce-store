import { Billboard as BillboardType } from '@/types/types';

interface BillboardProps {
    billboard: BillboardType
}

const Billboard:React.FC<BillboardProps> = ({billboard}) => {
    return (
        <div className='p-4 rounded-xl overflow-hidden sm:p-6 lg:p-8'>
            <div
                className='relative rounded-xl aspect-square overflow-hidden bg-cover md:aspect-[2.4/1]'
                style={{backgroundImage:`url(${billboard.imageUrl})`}}
            >
                <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
                    <div className='text-3xl font-bold max-w-xs sm:text-5xl sm:max-w-xl lg:text-6xl'>
                        {billboard.label}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;