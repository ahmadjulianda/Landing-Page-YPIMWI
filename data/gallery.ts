export interface GalleryItem {
    id: string;
    title: string;
    description: string;
    image: string;
    category: 'Kegiatan' | 'Prestasi' | 'Fasilitas' | 'Pembelajaran';
    date: string;
}

export const gallery: GalleryItem[] = [
    {
        id: 'wisuda-tahfidz-2025',
        title: 'Wisuda Tahfidz Angkatan 5',
        description: 'Momen bahagia wisuda 25 hafidz dan hafidzah.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        category: 'Prestasi',
        date: '2026-01-15',
    },
    {
        id: 'pembelajaran-tahsin',
        title: 'Kegiatan Pembelajaran Tahsin',
        description: "Proses pembelajaran tahsin Al-Qur'an di TK Rumah Qur'an.",
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
        category: 'Pembelajaran',
        date: '2026-01-12',
    },
    {
        id: 'lomba-nasional',
        title: 'Juara Lomba Tahfidz Nasional',
        description: 'Santri meraih juara di lomba tahfidz tingkat nasional.',
        image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&q=80',
        category: 'Prestasi',
        date: '2025-12-20',
    },
    {
        id: 'maulid-nabi',
        title: 'Peringatan Maulid Nabi SAW',
        description: 'Kegiatan peringatan Maulid Nabi di lingkungan yayasan.',
        image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e4?w=800&q=80',
        category: 'Kegiatan',
        date: '2025-12-15',
    },
    {
        id: 'masjid-yayasan',
        title: 'Masjid Yayasan',
        description: 'Masjid sebagai pusat kegiatan ibadah dan pembelajaran.',
        image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
        category: 'Fasilitas',
        date: '2025-11-01',
    },
    {
        id: 'outbound',
        title: 'Kegiatan Outbound Santri',
        description: 'Kegiatan outbound untuk membangun kebersamaan dan leadership.',
        image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
        category: 'Kegiatan',
        date: '2025-10-15',
    },
];

export const getGalleryCategoryColor = (category: GalleryItem['category']): string => {
    const colors: Record<GalleryItem['category'], string> = {
        Kegiatan: 'bg-sky-100 text-sky-700',
        Prestasi: 'bg-amber-100 text-amber-700',
        Fasilitas: 'bg-green-100 text-green-700',
        Pembelajaran: 'bg-purple-100 text-purple-700',
    };
    return colors[category];
};
