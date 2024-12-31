import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GoogleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'login' | 'signup'
}

export function GoogleButton({ 
  variant = 'login',
  className,
  ...props 
}: GoogleButtonProps) {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      {...props}
    >
      <Image 
        src="/icons/google.svg" 
        alt="Google" 
        width={20} 
        height={20} 
      />
      {variant === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
    </button>
  )
} 