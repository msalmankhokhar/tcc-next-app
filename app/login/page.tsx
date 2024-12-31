import Link from 'next/link'
import AuthLayout from '@/components/auth/AuthLayout'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { GoogleButton } from '@/components/ui/buttons/GoogleButton'

export default function LoginPage() {
  return (
    <AuthLayout>
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-primary hover:text-primary-hover font-medium">
            Create one
          </Link>
        </p>
      </div>

      <form className="mt-10 space-y-6">
        <GoogleButton />
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or continue with</span>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-hover">
            Forgot password?
          </Link>
        </div>

        <PrimaryButton type="submit" className="w-full">
          Sign in
        </PrimaryButton>
      </form>
    </AuthLayout>
  )
} 