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

Melalui Mountain Dreams, penikmat diajak untuk merenungkan bahwa setiap perjalanan memiliki tantangan, tetapi di balik setiap langkah terdapat kemungkinan untuk bertumbuh, menemukan diri sendiri, dan mencapai puncak yang selama ini diimpikan. Seperti Rinjani yang berdiri megah di tengah perubahan cuaca dan waktu, manusia pun memiliki kekuatan untuk tetap teguh menjaga mimpi-mimpinya.

Filosofis Pendamping:
"Mimpi tidak selalu terlihat jelas dari awal, seperti puncak yang tersembunyi di balik kabut. Namun mereka selalu ada, menunggu keberanian untuk mendakinya."`,
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description: `Chaos Line adalah refleksi tentang kehidupan yang tidak pernah berjalan dalam garis lurus. Melalui tumpukan garis, goresan, dan pertemuan warna yang tampak acak, karya ini menggambarkan kekacauan yang sering hadir dalam pikiran manusia—antara harapan dan ketakutan, antara keputusan dan keraguan, antara masa lalu dan masa depan.

Garis-garis yang saling bertabrakan menjadi simbol perjalanan hidup yang penuh konflik, tekanan, dan perubahan yang tidak dapat diprediksi. Namun di balik kekacauan tersebut, terdapat ritme dan keteraturan yang tersembunyi. Setiap garis memiliki arah, setiap tumpang tindih memiliki alasan, sebagaimana setiap pengalaman dalam hidup membentuk siapa diri kita sebenarnya.

"Chaos Line" mengajak penikmat untuk melihat bahwa kekacauan bukanlah sesuatu yang harus selalu dihindari. Justru dari situ lahir pertumbuhan, kreativitas, dan pemahaman baru. Kadang manusia baru menemukan jalannya setelah tersesat di antara berbagai kemungkinan.

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

Melalui Tropical Leaves, penikmat diajak untuk menghargai keindahan yang hadir dalam hal-hal sederhana. Alam mengajarkan bahwa pertumbuhan tidak selalu harus cepat atau mencolok; terkadang ia hadir perlahan namun tetap kuat dan bermakna.

Filosofis Pendamping:
"Daun tidak pernah terburu-buru untuk tumbuh, namun ia selalu tiba pada bentuk terbaiknya."`,
  },

  {
    id: 4,
    title: 'Green Field',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description: `Green Field adalah representasi tentang ketenangan, harapan, dan ruang untuk bertumbuh. Hamparan hijau yang luas dalam karya ini melambangkan kehidupan yang terus bergerak dan berkembang, sekaligus menjadi simbol kebebasan bagi pikiran untuk beristirahat dari hiruk-pikuk dunia.

Ladang hijau bukan hanya sebuah pemandangan alam, melainkan metafora tentang kemungkinan yang belum terjamah. Setiap helai rumput menggambarkan langkah kecil yang membentuk perjalanan besar.

Melalui Green Field, penikmat diajak memahami bahwa tidak semua pertumbuhan terjadi secara dramatis. Ada yang tumbuh pelan, tapi kuat.

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

Sosok malaikat menjadi simbol harapan dan kekuatan dalam kelembutan.

Filosofis Pendamping:
"Saat dunia menjadi terlalu bising, cahaya yang paling lembut sering kali datang dari tempat yang tidak terlihat."`,
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description: `Pertaruhan adalah refleksi tentang keberanian manusia dalam menghadapi ketidakpastian. Dalam kehidupan, setiap pilihan yang diambil selalu mengandung risiko; tidak ada jaminan kemenangan, tidak ada kepastian hasil.

Namun justru di situlah makna perjuangan ditemukan. Hidup adalah tentang keberanian untuk tetap melangkah.

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

Ia menjadi simbol masa ketika dunia masih penuh kemungkinan.

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

Dua jiwa berbeda namun tetap bisa hidup dalam harmoni.

Filosofis Pendamping:
"Kebersamaan bukan tentang menjadi sama, melainkan tentang tetap berdiri berdampingan di tengah perbedaan."`,
  },

  {
    id: 9,
    title: 'Perempuan dalam Kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description: `Perempuan dalam Kegelapan adalah refleksi tentang kekuatan yang lahir dari kesunyian dan pergulatan batin.

Kegelapan bukan akhir, tetapi ruang untuk memahami diri.

Filosofis Pendamping:
"Kegelapan tidak selalu datang untuk menenggelamkan cahaya; terkadang ia hadir agar kita menyadari bahwa cahaya itu masih ada."`,
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description: `Malam Indah yang Sepi adalah refleksi tentang keheningan yang bermakna.

Kesunyian bukan kekosongan, tetapi ruang untuk memahami diri.

Filosofis Pendamping:
"Tidak semua kesunyian harus diisi; beberapa di antaranya diciptakan untuk dinikmati."`,
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description: `Setunjung terinspirasi dari pohon besar yang tumbuh di desa.

Ia melambangkan keteguhan, akar kehidupan, dan perjalanan waktu yang panjang.

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

Keheningan bukan kosong, tetapi penuh kehidupan.

Filosofis Pendamping:
"Alam tidak pernah benar-benar diam; ia hanya berbicara dengan cara yang lebih pelan dari manusia."`,
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section className="py-24 px-6 bg-[#14070d]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-bold">Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 perspective-[1200px]">

          {artworks.map((art, i) => (
            <div
              key={art.id}
              onClick={() => setSelected(art)}
              className="
                cursor-pointer rounded-3xl overflow-hidden
                transition-all duration-300 hover:scale-[1.03]
              "
            >
              <img
                src={art.src}
                className="
                  w-full aspect-[4/5] object-cover
                  transition duration-500 hover:brightness-110
                "
              />

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

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-6xl bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white"
            >
              <X size={30} />
            </button>

            <div className="grid lg:grid-cols-2">
              <div className="flex items-center justify-center bg-black p-6">
                <img src={selected?.src} className="max-h-[80vh] object-contain" />
              </div>

              <div className="p-10 text-white overflow-y-auto max-h-[80vh]">
                <h2 className="text-4xl font-bold mb-3">{selected?.title}</h2>
                <p className="text-white/50 mb-6">
                  {selected?.media} • {selected?.year}
                </p>
                <p className="leading-8 whitespace-pre-line text-white/80">
                  {selected?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
