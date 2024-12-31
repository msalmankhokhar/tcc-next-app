import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
}

export default function Logo({ variant = 'dark' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image src="/logos/icon.png" alt="The Competitive Coach" width={35} height={35} />
      <span className={`text-lg sm:text-xl font-bold ${variant === 'light' ? 'text-white' : 'text-gray-900'}`}>
        The Competitive Coach
      </span>
    </Link>
  )
}
