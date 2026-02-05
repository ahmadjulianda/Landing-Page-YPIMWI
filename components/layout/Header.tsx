'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/profil', label: 'Profil' },
    { href: '/sekolah', label: 'Sekolah' },
    { href: '/berita', label: 'Berita' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/artikel', label: 'Artikel' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-[72px] md:h-24">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-12 h-12 md:w-16 md:h-16">
                            <Image
                                src="/images/logo.png"
                                alt="Logo YPIMWI"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                                YPIMWI
                            </h1>
                            <p className="text-xs text-gray-500 leading-tight">
                                Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 text-gray-600 hover:text-sky-600 font-medium transition-colors rounded-lg hover:bg-sky-50"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/sekolah"
                            className="ml-4 btn btn-primary text-sm"
                        >
                            Daftar Sekarang
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden p-2 text-gray-600 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden py-4 border-t border-gray-100">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-3 text-gray-600 hover:text-sky-600 hover:bg-sky-50 font-medium rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/sekolah"
                                className="mt-4 btn btn-primary text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Daftar Sekarang
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}
