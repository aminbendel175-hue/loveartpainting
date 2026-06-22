import { useState } from 'react';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Mountain Dream',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan1.jpg',
    description: `Mountain Dream adalah refleksi tentang perjalanan manusia dalam mengejar sesuatu yang lebih tinggi dari dirinya sendiri—bukan hanya secara fisik, tetapi juga secara batin.

Gunung dalam karya ini bukan sekadar lanskap, melainkan simbol kesadaran bahwa setiap mimpi selalu berada di kejauhan, memanggil untuk didekati meski jalannya tidak pernah mudah. Kabut yang menyelimuti puncak menggambarkan ketidakpastian yang selalu hadir dalam proses tumbuh.

Namun di balik itu semua, terdapat cahaya yang tidak pernah benar-benar hilang. Cahaya itu adalah harapan kecil yang terus memandu langkah, bahkan ketika arah terasa tidak pasti.

Filosofis:
"Mimpi tidak menunggu untuk terlihat jelas, ia hanya menunggu untuk diperjuangkan."`,
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description: `Chaos Line menggambarkan kehidupan yang tidak pernah berjalan lurus, tidak pernah benar-benar rapi, dan tidak pernah bisa diprediksi sepenuhnya.

Setiap garis dalam karya ini adalah simbol dari keputusan, luka, dan pertemuan yang membentuk diri manusia. Kekacauan bukan kesalahan, melainkan bentuk alami dari proses menjadi.

Di dalam kekacauan itu sebenarnya terdapat pola yang tidak langsung terlihat. Seperti hidup, makna sering tersembunyi di balik hal-hal yang tampak tidak teratur.

Filosofis:
"Terkadang kita harus tersesat untuk benar-benar menemukan arah."`,
  },

  {
    id: 3,
    title: 'Tropical Leaves',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan3.jpg',
    description: `Tropical Leaves adalah perayaan tentang kehidupan yang terus bertumbuh tanpa harus terburu-buru.

Daun-daun dalam karya ini mewakili manusia dengan segala perbedaan perjalanan hidupnya. Ada yang tumbuh cepat, ada yang lambat, ada yang kuat, ada yang rapuh—namun semuanya tetap menjadi bagian dari satu kesatuan kehidupan.

Alam tidak pernah memaksa, ia hanya mengalir. Dari situlah manusia belajar bahwa pertumbuhan sejati membutuhkan waktu, kesabaran, dan penerimaan.

Filosofis:
"Yang tumbuh perlahan sering kali bertahan paling lama."`,
  },

  {
    id: 4,
    title: 'Green Field',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description: `Green Field adalah ruang hening yang merepresentasikan ketenangan di tengah dunia yang terus bergerak cepat.

Ladang hijau ini bukan hanya tentang alam, tetapi tentang ruang batin manusia yang ingin beristirahat dari tekanan dan kebisingan hidup.

Di dalam kesederhanaannya, terdapat kekuatan yang sering tidak disadari—bahwa ketenangan bukan kelemahan, melainkan fondasi dari kejernihan berpikir dan keberlanjutan hidup.

Filosofis:
"Yang tenang bukan berarti kosong, tapi penuh yang tak terlihat."`,
  },

  {
    id: 5,
    title: 'Angel',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan5.jpg',
    description: `Angel adalah simbol tentang kehadiran yang tidak selalu terlihat, namun selalu bisa dirasakan.

Ia bukan hanya representasi spiritual, tetapi juga metafora tentang harapan, dukungan, dan kekuatan yang hadir dalam bentuk paling lembut dalam hidup manusia.

Kadang “malaikat” bukan sosok, melainkan momen, kenangan, atau seseorang yang pernah membuat kita tetap bertahan.

Filosofis:
"Cahaya paling lembut sering datang saat kita paling gelap."`,
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description: `Pertaruhan adalah tentang keberanian mengambil langkah di tengah ketidakpastian.

Setiap pilihan dalam hidup selalu memiliki risiko, tetapi justru di situlah nilai dari keberanian terbentuk. Hidup tidak pernah menjanjikan hasil, hanya kesempatan untuk mencoba.

Dalam setiap keputusan, manusia sedang mempertaruhkan sesuatu: waktu, harapan, atau bahkan dirinya sendiri.

Filosofis:
"Yang tidak pernah bertaruh, tidak pernah benar-benar hidup."`,
  },

  {
    id: 7,
    title: 'Gadis Kecil',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan7.jpg',
    description: `Gadis Kecil adalah simbol masa ketika dunia masih penuh kemungkinan tanpa batas.

Ia mewakili sisi manusia yang paling murni—rasa ingin tahu, keberanian untuk bermimpi, dan keyakinan bahwa segala sesuatu mungkin terjadi.

Seiring waktu, dunia mengubah cara kita melihat, tetapi karya ini mengingatkan bahwa bagian itu tidak pernah benar-benar hilang.

Filosofis:
"Di dalam setiap dewasa, masih ada anak kecil yang tidak pernah berhenti bermimpi."`,
  },

  {
    id: 8,
    title: 'Twin Macaws',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan8.jpg',
    description: `Twin Macaws adalah refleksi tentang hubungan, keseimbangan, dan kebersamaan tanpa kehilangan identitas diri.

Dua burung yang berbeda namun hidup berdampingan ini melambangkan bahwa hubungan tidak menuntut kesamaan, melainkan penerimaan.

Dalam perbedaan, justru ditemukan harmoni yang lebih dalam.

Filosofis:
"Cinta sejati tidak menyatukan menjadi satu, tapi menguatkan dua arah yang berbeda."`,
  },

  {
    id: 9,
    title: 'Perempuan dalam Kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description: `Perempuan dalam Kegelapan adalah simbol kekuatan yang lahir dari kesunyian dan luka yang tidak selalu terlihat.

Kegelapan di sini bukan akhir, tetapi ruang di mana manusia belajar mengenali dirinya sendiri tanpa distraksi dunia luar.

Dalam diam, ada proses yang dalam. Dalam gelap, ada pemahaman yang tumbuh perlahan.

Filosofis:
"Kegelapan tidak datang untuk menghancurkan, tapi untuk mengajarkan cahaya."`,
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description: `Malam Indah yang Sepi adalah refleksi tentang keheningan yang menenangkan, bukan menakutkan.

Kesunyian malam menjadi ruang bagi pikiran untuk kembali jernih, bagi hati untuk kembali tenang.

Dalam diam, manusia sering menemukan jawabannya sendiri.

Filosofis:
"Tidak semua keheningan perlu dipecahkan."`,
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description: `Setunjung adalah simbol keteguhan hidup yang tumbuh dari kesabaran waktu.

Seperti pohon besar yang tetap berdiri di tengah perubahan, ia mengajarkan bahwa kekuatan tidak selalu terlihat dari gerakan, tetapi dari ketahanan.

Ia diam, namun hidupnya penuh makna.

Filosofis:
"Yang paling kuat sering kali adalah yang paling sabar."`,
  },

  {
    id: 12,
    title: 'Silent Nature',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan12.jpg',
    description: `Silent Nature adalah refleksi tentang alam yang tidak pernah benar-benar diam.

Ia berbicara melalui angin, cahaya, dan waktu dengan bahasa yang tidak selalu bisa langsung dimengerti manusia.

Dalam keheningan alam, terdapat pesan yang lebih dalam dari sekadar suara.

Filosofis:
"Alam tidak pernah diam, kita hanya lupa cara mendengarnya."`,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-24 px-6 lg:px-10 bg-[#14070d]">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-white text-5xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelected(art)}
              className="cursor-pointer group"
            >
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={art.src}
                  className="w-full aspect-[4/5] object-cover transition group-hover:scale-105"
                />
              </div>

              <div className="mt-3 text-white">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-white/50 text-sm">
                  {art.media} • {art.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL FIX LANDSCAPE + SCROLL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-[#14070d] rounded-3xl overflow-hidden flex flex-col sm:flex-row max-h-[92vh]"
          >

            {/* IMAGE */}
            <div className="sm:w-1/2 bg-black flex items-center justify-center p-4">
              <img
                src={selected.src}
                className="max-h-[40vh] sm:max-h-[90vh] object-contain"
              />
            </div>

            {/* DESCRIPTION */}
            <div className="sm:w-1/2 p-6 lg:p-10 text-white overflow-y-auto max-h-[50vh] sm:max-h-[90vh]">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                {selected.title}
              </h2>

              <p className="text-white/50 mb-6">
                {selected.media} • {selected.year}
              </p>

              <p className="whitespace-pre-line leading-8 text-white/80">
                {selected.description}
              </p>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 text-white"
            >
              <X size={30} />
            </button>

          </div>
        </div>
      )}
    </section>
  );
}
