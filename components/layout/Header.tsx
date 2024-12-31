"use client"
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { PrimaryButton } from '@/components/ui/buttons/PrimaryButton'
import { SecondaryButton } from '@/components/ui/buttons/SecondaryButton'
import Logo from '@/components/layout/Logo'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Logo />

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/courses" className="text-sm font-medium hover:text-primary">
                        Courses
                    </Link>
                    <Link href="/teachers" className="text-sm font-medium hover:text-primary">
                        Teachers
                    </Link>
                    <Link href="/exams" className="text-sm font-medium hover:text-primary">
                        Exams
                    </Link>
                    <Link href="/live-classes" className="text-sm font-medium hover:text-primary">
                        Live Classes
                    </Link>
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <SecondaryButton size="sm">
                            Log in
                        </SecondaryButton>
                    </Link>
                    <Link href="/signup">
                        <PrimaryButton size="sm">
                            Get Started
                        </PrimaryButton>
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        <Link href="/courses" className="block py-2 text-base font-medium">
                            Courses
                        </Link>
                        <Link href="/teachers" className="block py-2 text-base font-medium">
                            Teachers
                        </Link>
                        <Link href="/exams" className="block py-2 text-base font-medium">
                            Exams
                        </Link>
                        <Link href="/live-classes" className="block py-2 text-base font-medium">
                            Live Classes
                        </Link>
                        <div className="flex flex-col gap-2 pt-2">
                            <Link href="/login">
                                <SecondaryButton size="default" className="w-full">
                                    Log in
                                </SecondaryButton>
                            </Link>
                            <Link href="/signup">
                                <PrimaryButton size="default" className="w-full">
                                    Get Started
                                </PrimaryButton>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
} 