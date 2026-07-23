import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'warm';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const variants = {
  primary: 'bg-saffron text-white hover:bg-saffron-dark border-saffron shadow-lg shadow-saffron/30',
  secondary: 'bg-maroon-dark text-cream hover:bg-maroon-light border-maroon',
  outline: 'border-2 border-gold text-gold hover:bg-gold/10 hover:border-gold-light',
  ghost: 'text-cream/80 hover:text-saffron hover:bg-saffron/10',
  warm: 'btn-warm inline-flex items-center justify-center',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
  xl: 'px-10 py-5 text-lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isWarm = variant === 'warm';

    return (
      <motion.button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'relative inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded-full border-2 transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none',
          'active:scale-[0.98]',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          className
        )}
        whileHover={!disabled && !isLoading ? { scale: 1.02 } : undefined}
        whileTap={!disabled && !isLoading ? { scale: 0.98 } : undefined}
        style={isWarm ? { isolation: 'isolate' } : undefined}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        ) : leftIcon ? (
          <span className="mr-2" aria-hidden="true">{leftIcon}</span>
        ) : null}
        <span className={cn('relative z-10', isWarm && 'btn-warm')}>{children}</span>
        {!isLoading && rightIcon && <span className="ml-2" aria-hidden="true">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';