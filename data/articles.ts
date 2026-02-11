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
    {
        id: 'sistem-pendidikan-islam-terpadu',
        title: 'Sistem Pendidikan Islam Terpadu: Mengintegrasikan Ilmu Dunia dan Akhirat',
        excerpt: 'Bagaimana sistem pendidikan Islam menggabungkan kurikulum modern dengan nilai-nilai Qur\'ani untuk menciptakan generasi yang seimbang.',
        content: `Sistem pendidikan Islam terpadu merupakan jawaban atas tantangan pendidikan modern yang seringkali memisahkan antara ilmu dunia dan akhirat. Di era globalisasi ini, anak-anak membutuhkan pendidikan yang tidak hanya mempersiapkan mereka untuk sukses di dunia kerja, tetapi juga membekali mereka dengan fondasi spiritual yang kuat.

Konsep dasar pendidikan Islam terpadu bertumpu pada prinsip "tauhid" dalam ilmu pengetahuan - bahwa semua ilmu berasal dari Allah SWT dan harus kembali kepada-Nya. Ini berbeda dengan sistem pendidikan sekuler yang memisahkan agama dari sains dan mata pelajaran lainnya.

**Integrasi Kurikulum Nasional dan Islam**

Di YPIMWI, kami mengimplementasikan kurikulum ganda yang menggabungkan:
1. **Kurikulum Nasional** - untuk memastikan kesetaraan dengan sekolah lain dan persiapan ujian nasional
2. **Kurikulum Islam** - meliputi tahfidz, fiqh, akidah, akhlak, dan bahasa Arab
3. **Karakter Building** - pembentukan akhlak mulia melalui kegiatan sehari-hari

**Metodologi Pembelajaran**

Pendidikan Islam terpadu menggunakan pendekatan:
- **Contextual Learning**: Menghubungkan setiap pelajaran dengan nilai-nilai Islam
- **Experiential Learning**: Belajar melalui pengalaman praktis ibadah sehari-hari
- **Character First**: Akhlak dan karakter menjadi prioritas utama
- **Holistic Development**: Mengembangkan IQ, EQ, dan SQ secara seimbang

**Implementasi di Kelas**

Contoh praktis integrasi ini terlihat dalam:
- Pelajaran sains dimulai dengan "Bismillah" dan diakhiri dengan refleksi kebesaran Allah
- Matematika dikaitkan dengan konsep keadilan dan presisi dalam Islam
- Bahasa Indonesia digunakan untuk memahami Al-Qur'an dan hadits
- Sejarah diajarkan dari perspektif Islam dan peradaban Islam

**Hasil yang Diharapkan**

Melalui sistem ini, kami berharap menghasilkan lulusan yang:
- Cerdas secara akademik dan siap bersaing globally
- Kuat secara spiritual dengan hafalan Al-Qur'an
- Memiliki akhlak mulia dan karakter unggul
- Mampu menjadi pemimpin yang bertanggung jawab

Sistem pendidikan Islam terpadu bukan sekadar tambahan pelajaran agama, melainkan sebuah filosofi pendidikan holistik yang menempatkan Allah sebagai pusat dari semua ilmu pengetahuan.`,
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
        category: 'Pendidikan Islam',
        date: '2026-02-10',
        author: 'Ustadz Dr. Ahmad Fauzi, M.Pd.',
        readTime: '10 menit',
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
