import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'default' | 'lg'
}

export function PrimaryButton({ 
  children, 
  className,
  size = 'default',
  ...props 
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        'bg-primary hover:bg-primary-hover text-white',
        {
          'h-9 px-3 text-sm': size === 'sm',
          'h-10 px-4 text-sm': size === 'default',
          'h-11 px-8 text-base': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 