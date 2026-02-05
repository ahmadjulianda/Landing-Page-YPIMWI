export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: 'Parenting' | 'Pendidikan Islam' | 'Tahfidz' | 'Motivasi';
    date: string;
    author: string;
    readTime: string;
}

export const articles: Article[] = [
    {
        id: 'pentingnya-pendidikan-quran',
        title: "Pentingnya Pendidikan Al-Qur'an Sejak Usia Dini",
        excerpt: "Membangun generasi Qur'ani dimulai dari pendidikan anak usia dini yang terstruktur dan penuh kasih sayang.",
        content: "Pendidikan Al-Qur'an sejak usia dini merupakan investasi terbaik untuk masa depan anak.",
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        category: 'Pendidikan Islam',
        date: '2026-02-01',
        author: 'Ustadz Ahmad',
        readTime: '5 menit',
    },
    {
        id: 'tips-menghafal-quran',
        title: "7 Tips Efektif Menghafal Al-Qur'an untuk Anak",
        excerpt: "Panduan praktis membantu anak-anak menghafal Al-Qur'an dengan metode yang menyenangkan.",
        content: "Menghafal Al-Qur'an bagi anak-anak membutuhkan pendekatan khusus yang sesuai dengan perkembangan mereka.",
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
        category: 'Tahfidz',
        date: '2026-01-25',
        author: 'Ustadzah Fatimah',
        readTime: '7 menit',
    },
    {
        id: 'peran-orangtua-pendidikan',
        title: 'Peran Orang Tua dalam Pendidikan Islami Anak',
        excerpt: 'Orang tua adalah madrasah pertama bagi anak. Bagaimana memaksimalkan peran ini?',
        content: 'Keluarga adalah fondasi utama dalam membentuk karakter dan akhlak anak.',
        image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80',
        category: 'Parenting',
        date: '2026-01-20',
        author: 'Ustadz Ibrahim',
        readTime: '6 menit',
    },
    {
        id: 'membangun-motivasi-belajar',
        title: 'Membangun Motivasi Belajar pada Anak',
        excerpt: 'Strategi membangun semangat belajar yang konsisten dan berkelanjutan pada anak.',
        content: 'Motivasi belajar adalah kunci keberhasilan pendidikan anak.',
        image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80',
        category: 'Motivasi',
        date: '2026-01-15',
        author: 'Ustadzah Aisyah',
        readTime: '5 menit',
    },
];

export const getArticleCategoryColor = (category: Article['category']): string => {
    const colors: Record<Article['category'], string> = {
        Parenting: 'bg-pink-100 text-pink-700',
        'Pendidikan Islam': 'bg-sky-100 text-sky-700',
        Tahfidz: 'bg-green-100 text-green-700',
        Motivasi: 'bg-amber-100 text-amber-700',
    };
    return colors[category];
};
