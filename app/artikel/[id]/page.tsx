import { Metadata } from 'next';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { articles, getArticleCategoryColor } from '@/data/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type ArticleDetailPageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ArticleDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const article = articles.find((article) => article.id === id);

    if (!article) {
        return {
            title: 'Artikel Tidak Ditemukan',
            description: 'Artikel yang Anda cari tidak ditemukan.',
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
        openGraph: {
            images: [{ url: article.image }],
        },
    };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
    const { id } = await params;
    const article = articles.find((article) => article.id === id);

    if (!article) {
        notFound();
    }

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white mb-8">
                        <Link href="/artikel" className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-4">
                            <ArrowLeft size={18} className="mr-2" />
                            Kembali ke Semua Artikel
                        </Link>
                        <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${getArticleCategoryColor(article.category)}`}>
                            {article.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                            {article.title}
                        </h1>
                        <p className="text-sky-100 text-lg max-w-3xl mx-auto mb-8">
                            {article.excerpt}
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sky-200 text-sm">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{article.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>
                                    {new Date(article.date).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="section bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-lg max-w-none">
                            <div className="text-gray-700 leading-relaxed space-y-6">
                                {article.content.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-base md:text-lg leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Article Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getArticleCategoryColor(article.category)}`}>
                                        {article.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <User size={14} />
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>
                                            {new Date(article.date).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-between">
                            <Link href="/artikel" className="btn btn-secondary">
                                <ArrowLeft size={18} className="mr-2" />
                                Kembali ke Semua Artikel
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Artikel Terkait
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles
                            .filter((a) => a.id !== article.id && a.category === article.category)
                            .slice(0, 3)
                            .map((relatedArticle) => (
                                <article key={relatedArticle.id} className="card group cursor-pointer">
                                    <Link href={`/artikel/${relatedArticle.id}`}>
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={relatedArticle.image}
                                                alt={relatedArticle.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getArticleCategoryColor(relatedArticle.category)}`}>
                                                    {relatedArticle.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-xs text-gray-400">
                                                    <Clock size={12} />
                                                    {relatedArticle.readTime}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-sky-600 transition-colors">
                                                {relatedArticle.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                                {relatedArticle.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-2">
                                                    <User size={14} />
                                                    <span>{relatedArticle.author}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar size={14} />
                                                    <span>
                                                        {new Date(relatedArticle.date).toLocaleDateString('id-ID', {
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
                </div>
            </section>
        </>
    );
}
