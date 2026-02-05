import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Youtube
} from 'lucide-react';

const quickLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/profil', label: 'Profil' },
    { href: '/sekolah', label: 'Sekolah' },
    { href: '/berita', label: 'Berita' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/artikel', label: 'Artikel' },
];

const schoolLinks = [
    { href: '/sekolah#tk', label: 'TK Rumah Qur\'an' },
    { href: '/sekolah#sd', label: 'Homeschooling SD' },
    { href: '/sekolah#smp', label: 'Homeschooling SMP' },
    { href: '/sekolah#pesantren', label: 'Pondok Pesantren' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* About */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-16 h-16">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo YPIMWI"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-500"></h3>
                                <p className="text-sm text-gray-400">Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-4">
                            Membangun generasi Qur'ani yang berakhlak mulia dan berprestasi.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Menu</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Schools */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Unit Pendidikan</h4>
                        <ul className="space-y-2">
                            {schoolLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-sky-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Kontak</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                                <span className="text-gray-400">
                                    Jl. Kupula I Desa Lambaro Skep, Kec. Kuta Alam, Kota Banda Aceh, Provinsi Aceh, Indonesia
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Phone size={18} className="text-sky-400 shrink-0" />
                                <a href="tel:+6281234567890" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    +62 812-4711-7035
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <Mail size={18} className="text-sky-400 shrink-0" />
                                <a href="mailto:ypiskandarmuda.wi@gmail.com" className="text-gray-400 hover:text-sky-400 transition-colors">
                                    ypiskandarmuda.wi@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
