export interface School {
  id: string;
  name: string;
  shortName: string;
  level: 'TK' | 'SD' | 'SMP' | 'SMA' | 'Pesantren';
  description: string;
  image: string;
  gender?: 'Putra' | 'Putri' | 'Campuran';
  address?: string;
}

export const schools: School[] = [
  {
    id: 'tk-rqwi-01',
    name: "TK Rumah Qur'an Wahdah Islamiyah 01",
    shortName: 'TK RQ WI 01',
    level: 'TK',
    description: "Pendidikan anak usia dini berbasis Al-Qur'an dengan metode pembelajaran yang menyenangkan dan islami.",
    image: '/images/schools/rq-1.jpeg',
    gender: 'Campuran',
  },
  {
    id: 'tk-rqwi-02',
    name: "TK Rumah Qur'an Wahdah Islamiyah 02",
    shortName: 'TK RQ WI 02',
    level: 'TK',
    description: "Pendidikan anak usia dini dengan fokus pada pembentukan karakter islami dan pengenalan Al-Qur'an.",
    image: '/images/schools/rq-2.jpeg',
    gender: 'Campuran',
  },
  {
    id: 'tk-abdurrahman',
    name: "TK Rumah Qur'an Abdurrahman",
    shortName: 'TK RQ Abdurrahman',
    level: 'TK',
    description: "Pendidikan anak usia dini yang menggabungkan kurikulum nasional dengan nilai-nilai Qur'ani.",
    image: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&q=80',
    gender: 'Campuran',
  },
  {
    id: 'hs-sd',
    name: 'Homeschooling Muhammad Al Fatih (Tingkat SD)',
    shortName: 'HS Al Fatih SD',
    level: 'SD',
    description: "Homeschooling tingkat Sekolah Dasar dengan kurikulum fleksibel berbasis Al-Qur'an dan tahfidz.",
    image: '/images/schools/hs-sd.jpeg',
    gender: 'Campuran',
  },
  {
    id: 'hs-smp',
    name: 'Homeschooling Muhammad Al Fatih (Tingkat SMP) Khusus Putri',
    shortName: 'HS Al Fatih SMP Putri',
    level: 'SMP',
    description: "Homeschooling SMP khusus putri dengan fokus pada tahfidz Al-Qur'an dan pembentukan akhlak mulia.",
    image: '/images/schools/hs-smp-pi.jpeg',
    gender: 'Putri',
  },
  {
    id: 'pesantren',
    name: "Pondok Pesantren Tahfidzul Qur'an Wahdah Islamiyah (Tingkat SMP/SMA) Khusus Putra",
    shortName: 'Ponpes Tahfidz WI',
    level: 'Pesantren',
    description: 'Pondok pesantren tahfidz untuk putra tingkat SMP dan SMA dengan program hafalan intensif dan pendidikan formal.',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&q=80',
    gender: 'Putra',
  },
];

export const getLevelColor = (level: School['level']): string => {
  const colors: Record<School['level'], string> = {
    TK: 'bg-pink-100 text-pink-700',
    SD: 'bg-green-100 text-green-700',
    SMP: 'bg-blue-100 text-blue-700',
    SMA: 'bg-purple-100 text-purple-700',
    Pesantren: 'bg-amber-100 text-amber-700',
  };
  return colors[level];
};
