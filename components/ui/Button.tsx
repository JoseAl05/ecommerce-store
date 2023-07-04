import { cn } from '@/lib/uitls';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
},ref) => {
    return (
        <button
            className={cn(
                `
                    w-auto
                    text-white
                    font-semibold
                    rounded-full
                    bg-black
                    border-transparent
                    px-5
                    py-3
                    transition
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                    hover:opacity-75
                `,
                className
            )}
            ref={ref}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;