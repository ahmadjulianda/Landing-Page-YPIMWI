import { Metadata } from 'next';
import Image from 'next/image';
import { Target, Eye, Heart, Users, BookOpen, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Profil Lembaga',
    description: 'Profil Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah - Sejarah, Visi, Misi, dan Struktur Organisasi',
};

export default function ProfilPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 gradient-bg">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Profil Lembaga</h1>
                        <p className="text-sky-100 text-lg max-w-2xl mx-auto">
                            Mengenal lebih dekat Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-sky-600 font-semibold">Tentang Kami</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                                Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah (YPIMWI) adalah lembaga pendidikan Islam yang didirikan di bawah naungan organisasi Wahdah Islamiyah. Yayasan ini berkomitmen untuk menyediakan pendidikan berkualitas yang mengintegrasikan ilmu pengetahuan umum dengan nilai-nilai keislaman dan program tahfidz Al-Qur'an.
                                </p>
                                <p>
                                    Dengan enam unit pendidikan yang mencakup jenjang TK, SD, SMP, hingga SMA/Pesantren, YPIMWI berupaya mencetak generasi yang tidak hanya unggul dalam akademik, tetapi juga memiliki hafalan Al-Qur'an dan akhlak mulia sesuai dengan ajaran Islam.
                                </p>
                                <p>
                                    Nama "Iskandar Muda" diambil dari nama Sultan Iskandar Muda, raja dari Kerajaan Aceh yang dikenal karena kepemimpinan dan kecintaannya terhadap Islam.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                                    alt="Tentang YPIMWI"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi Misi Section */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sky-600 font-semibold">Visi & Misi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Arah & Tujuan Kami
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Visi */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-sky-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                                    <Eye className="text-sky-600" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Visi</h3>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                "Menjadi lembaga pendidikan Islam terdepan yang mencetak generasi Qur'ani, berakhlak mulia, cerdas, mandiri, dan berprestasi untuk kejayaan Islam dan umat."
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-sky-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-xl flex items-center justify-center">
                                    <Target className="text-sky-600" size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Misi</h3>
                            </div>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></span>
                                    <span>Menyelenggarakan pendidikan Islam yang berkualitas dan terjangkau</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></span>
                                    <span>Membina santri agar hafal Al-Qur'an dengan pemahaman yang benar</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></span>
                                    <span>Menanamkan akhlak mulia berdasarkan Al-Qur'an dan Sunnah</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></span>
                                    <span>Mengembangkan potensi akademik dan keterampilan santri</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></span>
                                    <span>Membangun kerjasama dengan orang tua dan masyarakat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sky-600 font-semibold">Nilai-Nilai Kami</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Prinsip yang Kami Pegang
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: BookOpen,
                                title: "Qur'ani",
                                description: "Al-Qur'an sebagai pedoman utama dalam setiap aspek pendidikan",
                            },
                            {
                                icon: Heart,
                                title: 'Akhlak Mulia',
                                description: 'Membentuk karakter berdasarkan akhlak Rasulullah SAW',
                            },
                            {
                                icon: Award,
                                title: 'Keunggulan',
                                description: 'Berusaha mencapai yang terbaik dalam setiap bidang',
                            },
                            {
                                icon: Users,
                                title: 'Ukhuwah',
                                description: 'Membangun persaudaraan yang kuat antar civitas akademika',
                            },
                        ].map((value, index) => (
                            <div key={index} className="card p-6 text-center">
                                <div className="w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="text-sky-600" size={32} />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Structure Section */}
            <section className="section bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-sky-600 font-semibold">Struktur Organisasi</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                            Pengurus Yayasan
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: 'Ust. Abdi Human Zultani, S.H.', position: 'Ketua Yayasan' },
                                { name: 'Ahmad Julianda, S.T.', position: 'Sekretaris' },
                                { name: 'Zulkarnaini, S.E.', position: 'Bendahara' },
                                { name: 'R.M. Syawal', position: 'Direktur Keuangan' },
                                { name: 'Awalin Ridha, S.Pd.', position: 'Direktur Pendidikan dan Pengembangan SDM' },
                                { name: 'Farid Muharram', position: 'Direktur Umum & Ekonomi' },
                            ].map((person, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
                                    <div className="w-20 h-20 bg-sky-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <Users className="text-sky-600" size={32} />
                                    </div>
                                    <h3 className="font-bold text-gray-900">{person.name}</h3>
                                    <p className="text-sky-600 text-sm">{person.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
