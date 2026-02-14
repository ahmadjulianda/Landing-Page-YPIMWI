import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { news, getCategoryColor } from '@/data/news';

export const metadata: Metadata = {
    title: 'Berita & Pengumuman',
    description: 'Berita dan pengumuman terbaru dari Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah',
};

export default function BeritaPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Pengumuman</h1>
                        <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                            Kabar terbaru seputar kegiatan dan pengumuman dari YPIMWI
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-[72px] md:top-24 z-30 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Semua', 'Berita', 'Pengumuman', 'Kegiatan', 'Prestasi'].map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${cat === 'Semua'
                                    ? 'bg-sky-600 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-sky-100 hover:text-sky-600'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item) => (
                            <article key={item.id} className="card group cursor-pointer">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>
                                                {new Date(item.date).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric',
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User size={14} />
                                            <span>{item.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination placeholder */}
                    <div className="flex justify-center gap-2 mt-12">
                        <button className="w-10 h-10 rounded-lg bg-sky-600 text-white font-medium">1</button>
                        <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-sky-100 font-medium">2</button>
                        <button className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 hover:bg-sky-100 font-medium">3</button>
                    </div>
                </div>
            </section>
        </>
    );
}
