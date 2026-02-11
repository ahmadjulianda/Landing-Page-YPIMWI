export interface NewsItem {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: 'Berita' | 'Pengumuman' | 'Kegiatan' | 'Prestasi';
    date: string;
    author: string;
}

export const news: NewsItem[] = [
    {
        id: 'penerimaan-santri-baru-2026',
        title: 'Penerimaan Santri Baru Tahun Ajaran 2026/2027',
        excerpt: 'Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah membuka pendaftaran santri baru untuk semua jenjang pendidikan.',
        content: 'Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah membuka pendaftaran santri baru untuk semua jenjang pendidikan tahun ajaran 2026/2027.',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80',
        category: 'Pengumuman',
        date: '2026-02-01',
        author: 'Admin YPIMWI',
    },
    {
        id: 'wisuda-tahfidz-2025',
        title: 'Wisuda Tahfidz Angkatan ke-5',
        excerpt: "Sebanyak 25 santri berhasil menyelesaikan hafalan 30 Juz Al-Qur'an pada wisuda tahfidz angkatan ke-5.",
        content: "Alhamdulillah, sebanyak 25 santri berhasil menyelesaikan hafalan 30 Juz Al-Qur'an.",
        image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
        category: 'Prestasi',
        date: '2026-01-15',
        author: 'Admin YPIMWI',
    },
    {
        id: 'peringatan-maulid-nabi',
        title: 'Peringatan Maulid Nabi Muhammad SAW 1447 H',
        excerpt: 'Kegiatan peringatan Maulid Nabi Muhammad SAW dihadiri oleh seluruh santri dan ustadz dari semua unit pendidikan.',
        content: 'Kegiatan peringatan Maulid Nabi Muhammad SAW 1447 H diselenggarakan dengan khidmat.',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&q=80',
        category: 'Kegiatan',
        date: '2026-01-10',
        author: 'Admin YPIMWI',
    },
    {
        id: 'lomba-tahfidz-nasional',
        title: 'Santri YPIMWI Raih Juara di Lomba Tahfidz Nasional',
        excerpt: "Tiga santri Pondok Pesantren Tahfidzul Qur'an berhasil meraih juara di ajang lomba tahfidz tingkat nasional.",
        content: 'Alhamdulillah, tiga santri berhasil meraih prestasi gemilang di lomba tahfidz nasional.',
        image: 'https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=800&q=80',
        category: 'Prestasi',
        date: '2026-01-05',
        author: 'Admin YPIMWI',
    },
    {
        id: 'implementasi-kurikulum-terpadu',
        title: 'YPIMWI Implementasikan Kurikulum Pendidikan Islam Terpadu',
        excerpt: 'Yayasan resmi meluncurkan kurikulum baru yang mengintegrasikan ilmu pengetahuan umum dengan nilai-nilai Qur\'ani untuk semua unit pendidikan.',
        content: 'YPIMWI secara resmi mengimplementasikan kurikulum pendidikan Islam terpadu yang menggabungkan kurikulum nasional dengan pendidikan Islam holistik. Program ini dirancang untuk menciptakan lulusan yang tidak hanya unggul secara akademik tetapi juga kuat secara spiritual.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
        category: 'Berita',
        date: '2026-02-10',
        author: 'Admin YPIMWI',
    },
];

export const getCategoryColor = (category: NewsItem['category']): string => {
    const colors: Record<NewsItem['category'], string> = {
        Berita: 'bg-sky-100 text-sky-700',
        Pengumuman: 'bg-red-100 text-red-700',
        Kegiatan: 'bg-green-100 text-green-700',
        Prestasi: 'bg-amber-100 text-amber-700',
    };
    return colors[category];
};
