import Image from 'next/image'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex gap-10 flex-col justify-center lg:flex-row items-center lg:px-8 py-12 lg:py-20">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="">
            <a href="/courses" className="inline-flex space-x-4">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/10">
                What&apos;s new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600">
                <span>Just launched MDCAT 2025</span>
              </span>
            </a>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Pakistan&apos;s Premier Exam Prep Platform
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            Join live classes, access comprehensive study materials, and learn from experienced teachers. 
            Prepare for MDCAT, ECAT, and Public Service Commission exams with confidence.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <PrimaryButton size="lg" className="w-full sm:w-auto">
              Start Learning
            </PrimaryButton>
            <SecondaryButton size="lg" className="w-full sm:w-auto">
              Browse Courses
            </SecondaryButton>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24 lg:mt-0 hidden min-[1100px]:block">
          <div className="relative w-full max-w-xl lg:max-w-none">
            <Image
              src="/images/hero.jpg"
              alt="App screenshot"
              width={600}
              height={600}
              priority
              className="rounded-md object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 