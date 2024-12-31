import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-sm text-gray-400">
              Pakistan&apos;s leading online platform for competitive exam preparation
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Courses</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/courses/mdcat" className="text-sm text-gray-400 hover:text-white">
                  MDCAT
                </Link>
              </li>
              <li>
                <Link href="/courses/ecat" className="text-sm text-gray-400 hover:text-white">
                  ECAT
                </Link>
              </li>
              <li>
                <Link href="/courses/css" className="text-sm text-gray-400 hover:text-white">
                  CSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-8">
          <p className="text-sm text-gray-400">© 2024 The Competitive Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 