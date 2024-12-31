import Logo from '@/components/layout/Logo'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid">
      {/* Left: Form Section */}
      <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-10">
            <Logo />
          </div>
          {children}
        </div>
      </div>

      {/* Right: Image Section */}
      {/* <div className="hidden lg:block relative">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/images/auth-bg.jpg"
          alt="Students studying"
          width={1200}
          height={1600}
          priority
        />
        <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-20" />
      </div> */}

    </div>
  )
} 