import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Users, Award, GraduationCap } from 'lucide-react';
import { schools } from '@/data/schools';
import { news, getCategoryColor } from '@/data/news';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-bg overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                🕌 Pendidikan Berbasis Al-Qur'an
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Membangun Generasi
                <span className="block text-sky-200">Qur'ani yang Unggul</span>
              </h1>
              <p className="text-lg md:text-xl text-sky-100 mb-8 max-w-lg">
                Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah hadir untuk mendidik generasi berakhlak mulia, hafal Al-Qur'an, dan berprestasi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sekolah" className="btn btn-primary bg-white text-sky-600 hover:bg-sky-50">
                  Lihat Unit Pendidikan
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link href="/profil" className="btn btn-secondary border-white text-white hover:bg-white/10">
                  Tentang Kami
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative w-full h-[500px] animate-float">
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
                <Image
                  src="/images/hero.jpeg"
                  alt="Santri YPIMWI"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-16 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white rounded-2xl shadow-xl p-6 md:p-10">
            {[
              { icon: BookOpen, value: '6', label: 'Unit Pendidikan' },
              { icon: Users, value: '500+', label: 'Santri Aktif' },
              { icon: GraduationCap, value: '50+', label: 'Tenaga Pengajar' },
              { icon: Award, value: '100+', label: 'Hafidz/Hafidzah' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-100 rounded-xl mb-3">
                  <stat.icon className="text-sky-600" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/about.jpeg"
                  alt="Tentang YPIMWI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
            </div>

            <div>
              <span className="text-sky-600 font-semibold">Tentang Kami</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Yayasan Pendidikan Iskandar Muda Wahdah Islamiyah
              </h2>
              <p className="text-gray-600 mb-6">
                YPIMWI adalah lembaga pendidikan Islam yang berdiri di bawah naungan Wahdah Islamiyah. Kami berkomitmen untuk mendidik generasi yang tidak hanya cerdas secara akademik, tetapi juga hafal Al-Qur'an dan berakhlak mulia.
              </p>
              <p className="text-gray-600 mb-8">
                Dengan 6 unit pendidikan dari jenjang TK hingga Pondok Pesantren, kami menyediakan pendidikan berkualitas yang mengintegrasikan kurikulum nasional dengan kurikulum tahfidz dan keislaman.
              </p>
              <Link href="/profil" className="btn btn-primary">
                Selengkapnya
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-semibold">Unit Pendidikan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Sekolah di Bawah Yayasan
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Kami memiliki 6 unit pendidikan dari berbagai jenjang untuk memenuhi kebutuhan pendidikan islami putra-putri Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.slice(0, 6).map((school) => (
              <div key={school.id} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${school.level === 'TK' ? 'bg-pink-100 text-pink-700' :
                    school.level === 'SD' ? 'bg-green-100 text-green-700' :
                      school.level === 'SMP' ? 'bg-blue-100 text-blue-700' :
                        school.level === 'SMA' ? 'bg-purple-100 text-purple-700' :
                          'bg-amber-100 text-amber-700'
                    }`}>
                    {school.level}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                    {school.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {school.description}
                  </p>
                  {school.gender && (
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {school.gender}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/sekolah" className="btn btn-primary">
              Lihat Semua Sekolah
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sky-600 font-semibold">Berita & Pengumuman</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Kabar Terbaru
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item) => (
              <article key={item.id} className="card group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {new Date(item.date).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/berita" className="btn btn-primary">
              Lihat Semua Berita
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-sky-100 text-lg max-w-2xl mx-auto mb-8">
            Daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik yang mengintegrasikan ilmu dunia dan akhirat.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/sekolah" className="btn bg-white text-sky-600 hover:bg-sky-50">
              Daftar Sekarang
            </Link>
            <Link href="/profil" className="btn border-2 border-white text-white hover:bg-white/10">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
