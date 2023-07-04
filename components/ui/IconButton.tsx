import { cn } from '@/lib/uitls';
import { MouseEventHandler } from 'react';

interface IconButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    icon: React.ReactElement;
    className?:string;
}

const IconButton:React.FC<IconButtonProps> = ({onClick,icon,className}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'flex items-center justify-center rounded-full bg-white border shadow-md p-2 transition hover:scale-110',
                className
            )}
        >
            {icon}
        </button>
    );
}

export default IconButton;