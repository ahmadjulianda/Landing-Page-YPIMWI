import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Users, BookOpen } from 'lucide-react';
import { schools, getLevelColor } from '@/data/schools';

export const metadata: Metadata = {
    title: 'Daftar Sekolah',
    description: 'Daftar unit pendidikan di bawah Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah - TK, SD, SMP, SMA, dan Pondok Pesantren',
};

export default function SekolahPage() {
    // Group schools by level
    const tkSchools = schools.filter(s => s.level === 'TK');
    const otherSchools = schools.filter(s => s.level !== 'TK');

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-20 md:py-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Unit Pendidikan</h1>
                        <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                            6 unit pendidikan dari jenjang TK hingga Pondok Pesantren
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-8 bg-white -mt-10 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { label: 'TK', count: 3 },
                            { label: 'SD', count: 1 },
                            { label: 'SMP', count: 2 },
                            { label: 'Pesantren', count: 1 },
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg px-6 py-4 text-center min-w-[120px]">
                                <p className="text-2xl font-bold text-sky-600">{item.count}</p>
                                <p className="text-gray-500 text-sm">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TK Section */}
            <section className="section" id="tk">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-semibold mb-2">
                            Jenjang TK
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Taman Kanak-Kanak Rumah Qur'an
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Pendidikan anak usia dini berbasis Al-Qur'an
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tkSchools.map((school) => (
                            <SchoolCard key={school.id} school={school} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Levels */}
            <section className="section bg-gray-50" id="sd">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold mb-2">
                            SD, SMP & Pesantren
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Jenjang Pendidikan Lanjutan
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Homeschooling dan Pondok Pesantren Tahfidzul Qur'an
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherSchools.map((school) => (
                            <SchoolCard key={school.id} school={school} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section gradient-bg">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Tertarik Mendaftar?
                    </h2>
                    <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
                        Hubungi kami untuk informasi lebih lanjut tentang pendaftaran santri baru
                    </p>
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-white text-sky-600 hover:bg-sky-50"
                    >
                        Hubungi via WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}

function SchoolCard({ school }: { school: typeof schools[0] }) {
    return (
        <div className="card group">
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(school.level)}`}>
                    {school.level}
                </span>
                {school.gender && school.gender !== 'Campuran' && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-xs font-semibold text-gray-700">
                        {school.gender}
                    </span>
                )}
            </div>
            <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {school.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    {school.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        <BookOpen size={14} />
                        <span>Kurikulum Islami</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                        <Users size={14} />
                        <span>Tahfidz</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
