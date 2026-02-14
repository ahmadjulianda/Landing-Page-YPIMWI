import { Metadata } from 'next';
import Image from 'next/image';
import { gallery, getGalleryCategoryColor } from '@/data/gallery';

export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Gallery foto kegiatan dan prestasi Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah',
};

export default function GalleryPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
                        <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                            Dokumentasi kegiatan, prestasi, dan momen berharga di YPIMWI
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-[72px] md:top-24 z-30 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Semua', 'Kegiatan', 'Prestasi', 'Fasilitas', 'Pembelajaran'].map((cat) => (
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

            {/* Gallery Grid */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {gallery.map((item) => (
                            <div
                                key={item.id}
                                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className={`self-start px-2 py-1 rounded-full text-xs font-semibold mb-2 ${getGalleryCategoryColor(item.category)}`}>
                                        {item.category}
                                    </span>
                                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 text-xs mt-1 line-clamp-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn btn-primary">
                            Muat Lebih Banyak
                        </button>
                    </div>
                </div>
            </section>

            {/* Prestasi Section */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <span className="text-sky-600 font-semibold">Prestasi</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                            Prestasi yang Diraih
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Juara 1 Lomba Tahfidz Nasional',
                                year: '2025',
                                description: 'Kategori 30 Juz Putra',
                            },
                            {
                                title: 'Juara 2 MTQ Tingkat Provinsi',
                                year: '2025',
                                description: 'Kategori Tilawah Remaja',
                            },
                            {
                                title: 'Wisuda 25 Hafidz/Hafidzah',
                                year: '2026',
                                description: 'Angkatan ke-5 Ponpes YPIMWI',
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-xl p-6 shadow-sm text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🏆</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sky-600 text-sm font-medium mb-1">{item.year}</p>
                                <p className="text-gray-500 text-sm">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
