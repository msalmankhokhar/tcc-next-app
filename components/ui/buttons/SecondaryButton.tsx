import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { colors } from '@/lib/colors'

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'default' | 'lg'
}

export function SecondaryButton({ 
  children, 
  className,
  size = 'default',
  ...props 
}: SecondaryButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
        'border border-gray-200 hover:bg-gray-50',
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