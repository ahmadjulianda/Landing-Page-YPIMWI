import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { articles, getArticleCategoryColor } from '@/data/articles';

export const metadata: Metadata = {
    title: 'Artikel',
    description: 'Kumpulan artikel dan tulisan tentang wawasan pendidikan Islam dari Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah',
};

export default function ArtikelPage() {
    const featuredArticle = articles.find(article => article.id === 'sistem-pendidikan-islam-terpadu') || articles[0];
    const otherArticles = articles.filter(article => article.id !== featuredArticle.id);

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Artikel</h1>
                        <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                            Wawasan pendidikan Islam untuk orang tua dan pendidik
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 bg-white sticky top-[72px] md:top-24 z-30 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Semua', 'Parenting', 'Pendidikan Islam', 'Tahfidz', 'Motivasi'].map((cat) => (
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

            {/* Featured Article */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <span className="text-sky-600 font-semibold">Artikel Pilihan</span>
                    </div>

                    <article className="card overflow-hidden group cursor-pointer">
                        <div className="grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto">
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <span className={`self-start px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getArticleCategoryColor(featuredArticle.category)}`}>
                                    {featuredArticle.category}
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors">
                                    {featuredArticle.title}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{featuredArticle.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>
                                            {new Date(featuredArticle.date).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{featuredArticle.readTime}</span>
                                    </div>
                                </div>
                                <Link href={`/artikel/${featuredArticle.id}`} className="self-start btn btn-primary">
                                    Baca Selengkapnya
                                    <ArrowRight className="ml-2" size={18} />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Artikel Lainnya
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherArticles.map((article) => (
                            <article key={article.id} className="card group cursor-pointer">
                                <Link href={`/artikel/${article.id}`}>
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getArticleCategoryColor(article.category)}`}>
                                                {article.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-xs text-gray-400">
                                                <Clock size={12} />
                                                {article.readTime}
                                            </span>
                                        </div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <User size={14} />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={14} />
                                                <span>
                                                    {new Date(article.date).toLocaleDateString('id-ID', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                    })}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <button className="btn btn-secondary border-sky-600 text-sky-600 hover:bg-sky-50">
                            Muat Lebih Banyak
                        </button>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section gradient-bg">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Berlangganan Artikel
                    </h2>
                    <p className="text-sky-100 max-w-xl mx-auto mb-8">
                        Dapatkan artikel terbaru tentang pendidikan Islam langsung di email Anda
                    </p>
                    <div className="max-w-md mx-auto flex gap-3">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
                        />
                        <button className="btn bg-white text-sky-600 hover:bg-sky-50 shrink-0">
                            Berlangganan
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
