import { useState } from 'react';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Mountain Dream',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan1.jpg',
    description: `Mountain Dreams adalah representasi tentang mimpi, perjalanan batin, dan harapan yang terus tumbuh di tengah berbagai tantangan kehidupan. Terinspirasi dari keagungan Gunung Rinjani, lukisan ini tidak hanya menggambarkan sebuah lanskap alam, tetapi juga simbol perjalanan manusia menuju tujuan yang lebih tinggi.

Gunung dalam karya ini melambangkan cita-cita dan impian yang tampak jauh, berat, namun selalu memanggil untuk didekati. Kabut dan lapisan warna yang menyelimuti puncak menggambarkan ketidakpastian yang sering ditemui dalam proses meraih mimpi. Sementara itu, cahaya yang muncul di antara bentangan pegunungan menjadi simbol harapan yang tetap hadir meskipun jalan di depan belum sepenuhnya terlihat.

Melalui Mountain Dreams, penikmat diajak untuk merenungkan bahwa setiap perjalanan memiliki tantangan, tetapi di balik setiap langkah terdapat kemungkinan untuk bertumbuh, menemukan diri sendiri, dan mencapai puncak yang selama ini diimpikan.

Filosofis Pendamping:
"Mimpi tidak selalu terlihat jelas dari awal, seperti puncak yang tersembunyi di balik kabut. Namun mereka selalu ada, menunggu keberanian untuk mendakinya."`,
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description: `Chaos Line adalah refleksi tentang kehidupan yang tidak pernah berjalan dalam garis lurus. Melalui tumpukan garis, goresan, dan pertemuan warna yang tampak acak, karya ini menggambarkan kekacauan dalam pikiran manusia—antara harapan dan ketakutan, antara keputusan dan keraguan, antara masa lalu dan masa depan.

Garis-garis yang saling bertabrakan menjadi simbol perjalanan hidup yang penuh konflik, tekanan, dan perubahan yang tidak dapat diprediksi. Namun di balik kekacauan tersebut, terdapat ritme dan keteraturan yang tersembunyi.

"Chaos Line" mengajak penikmat untuk melihat bahwa kekacauan bukanlah sesuatu yang harus selalu dihindari. Justru dari situ lahir pertumbuhan, kreativitas, dan pemahaman baru.

Filosofis Pendamping:
"Tidak semua yang tampak berantakan kehilangan makna. Beberapa hal harus kacau terlebih dahulu sebelum menemukan bentuknya."`,
  },

  {
    id: 3,
    title: 'Tropical Leaves',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan3.jpg',
    description: `Tropical Leaves merupakan perayaan terhadap kehidupan, pertumbuhan, dan hubungan manusia dengan alam. Terinspirasi oleh rimbunnya dedaunan tropis yang tumbuh subur di iklim hangat, karya ini menggambarkan bagaimana alam terus berkembang dengan caranya sendiri—tenang, sabar, dan penuh daya hidup.

Setiap helai daun dalam lukisan ini melambangkan proses pertumbuhan yang berbeda. Ada yang berkembang sempurna, ada yang terluka oleh waktu, dan ada yang masih terus mencari cahaya. Seperti manusia, setiap daun memiliki perjalanan dan cerita yang unik.

Melalui Tropical Leaves, penikmat diajak untuk menghargai keindahan yang hadir dalam hal-hal sederhana.

Filosofis Pendamping:
"Daun tidak pernah terburu-buru untuk tumbuh, namun ia selalu tiba pada bentuk terbaiknya."`,
  },

  {
    id: 4,
    title: 'Green Field',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description: `Green Field adalah representasi tentang ketenangan, harapan, dan ruang untuk bertumbuh. Hamparan hijau yang luas dalam karya ini melambangkan kehidupan yang terus bergerak dan berkembang.

Ladang hijau bukan hanya pemandangan, tetapi metafora kehidupan yang tumbuh perlahan namun pasti. Setiap elemen kecil membentuk perjalanan besar yang bermakna.

Filosofis Pendamping:
"Hamparan yang tenang sering menyimpan kehidupan yang paling kuat."`,
  },

  {
    id: 5,
    title: 'Angel',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan5.jpg',
    description: `Angel adalah refleksi tentang cahaya, perlindungan, dan kehadiran yang tak selalu terlihat namun dapat dirasakan.

Sosok malaikat menjadi simbol harapan dan kekuatan di saat manusia rapuh.

Filosofis Pendamping:
"Saat dunia menjadi terlalu bising, cahaya yang paling lembut sering kali datang dari tempat yang tidak terlihat."`,
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description: `Pertaruhan adalah refleksi tentang keberanian manusia dalam menghadapi ketidakpastian.

Setiap keputusan dalam hidup adalah taruhan, tetapi di situlah makna perjalanan.

Filosofis Pendamping:
"Masa depan tidak pernah diberikan kepada mereka yang menunggu, tetapi kepada mereka yang berani mempertaruhkannya."`,
  },

  {
    id: 7,
    title: 'Gadis Kecil',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan7.jpg',
    description: `Gadis Kecil adalah refleksi tentang kepolosan, harapan, dan mimpi yang masih tumbuh.

Ia melambangkan dunia sebelum dibentuk oleh rasa takut dan realita.

Filosofis Pendamping:
"Di matanya tersimpan langit yang luas, tempat mimpi-mimpi kecil belajar terbang."`,
  },

  {
    id: 8,
    title: 'Twin Macaws',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan8.jpg',
    description: `Twin Macaw adalah refleksi tentang kebersamaan, keseimbangan, dan hubungan yang tumbuh melalui kepercayaan.

Dua jiwa berbeda yang tetap bisa berjalan berdampingan tanpa kehilangan identitas.

Filosofis Pendamping:
"Kebersamaan bukan tentang menjadi sama, melainkan tentang tetap berdiri berdampingan di tengah perbedaan."`,
  },

  {
    id: 9,
    title: 'Perempuan dalam Kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description: `Perempuan dalam Kegelapan adalah refleksi tentang kekuatan yang lahir dari kesunyian, luka yang disimpan dalam diam, dan cahaya yang tetap bertahan di tengah bayang-bayang kehidupan.

Kegelapan bukan sekadar absennya cahaya, melainkan ruang untuk memahami diri sendiri.

Filosofis Pendamping:
"Kegelapan tidak selalu datang untuk menenggelamkan cahaya; terkadang ia hadir agar kita menyadari bahwa cahaya itu masih ada."`,
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description: `Malam Indah yang Sepi adalah refleksi tentang keheningan yang memberi ruang untuk diri sendiri.

Kesunyian bukan kekosongan, tetapi ketenangan batin.

Filosofis Pendamping:
"Tidak semua kesunyian harus diisi; beberapa di antaranya diciptakan untuk dinikmati."`,
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description: `Setunjung adalah refleksi dari pohon besar di desa yang melambangkan keteguhan hidup.

Ia tumbuh dari kecil, kuat karena waktu, akar, dan kesabaran panjang.

Filosofis Pendamping:
"Yang tumbuh paling tinggi selalu pernah menjadi sesuatu yang paling sederhana di tanah yang sama."`,
  },

  {
    id: 12,
    title: 'Silent Nature',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan12.jpg',
    description: `Silent Nature adalah refleksi tentang alam yang berbicara tanpa suara.

Alam tidak benar-benar diam, ia hanya berbicara dengan bahasa yang lebih pelan dari manusia.

Filosofis Pendamping:
"Alam tidak pernah benar-benar diam; ia hanya berbicara dengan cara yang lebih pelan dari manusia."`,
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
              className="cursor-pointer overflow-hidden rounded-3xl hover:scale-[1.03] transition"
            >
              <img src={art.src} className="w-full aspect-[4/5] object-cover" />
              <div className="text-white mt-3">
                <h3 className="text-xl font-semibold">{art.title}</h3>
                <p className="text-white/50 text-sm">
                  {art.media} • {art.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[92vh] bg-[#14070d] rounded-3xl overflow-hidden flex flex-col lg:flex-row"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-6 top-6 text-white z-50"
            >
              <X size={30} />
            </button>

            <div className="lg:w-1/2 flex items-center justify-center bg-black p-4">
              <img src={selected.src} className="max-h-[70vh] object-contain" />
            </div>

            <div className="lg:w-1/2 p-6 lg:p-10 text-white overflow-y-auto max-h-[50vh] lg:max-h-[92vh]">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                {selected.title}
              </h2>

              <p className="text-white/50 mb-6">
                {selected.media} • {selected.year}
              </p>

              <p className="leading-8 whitespace-pre-line text-white/80">
                {selected.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
