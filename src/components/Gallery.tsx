import { useState } from 'react';
import { X } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Mountain Dream',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan1.jpg',
    description:
      '"Mountain Dreams" adalah representasi tentang mimpi, perjalanan batin, dan harapan yang terus tumbuh di tengah berbagai tantangan kehidupan. Terinspirasi dari keagungan Gunung Rinjani, lukisan ini tidak hanya menggambarkan sebuah lanskap alam, tetapi juga simbol perjalanan manusia menuju tujuan yang lebih tinggi.
Gunung dalam karya ini melambangkan cita-cita dan impian yang tampak jauh, berat, namun selalu memanggil untuk didekati. Kabut dan lapisan warna yang menyelimuti puncak menggambarkan ketidakpastian yang sering ditemui dalam proses meraih mimpi. Sementara itu, cahaya yang muncul di antara bentangan pegunungan menjadi simbol harapan yang tetap hadir meskipun jalan di depan belum sepenuhnya terlihat.
Melalui Mountain Dreams, penikmat diajak untuk merenungkan bahwa setiap perjalanan memiliki tantangan, tetapi di balik setiap langkah terdapat kemungkinan untuk bertumbuh, menemukan diri sendiri, dan mencapai puncak yang selama ini diimpikan. Seperti Rinjani yang berdiri megah di tengah perubahan cuaca dan waktu, manusia pun memiliki kekuatan untuk tetap teguh menjaga mimpi-mimpinya.

Filosofis Pendamping:
"Mimpi tidak selalu terlihat jelas dari awal, seperti puncak yang tersembunyi di balik kabut. Namun mereka selalu ada, menunggu keberanian untuk mendakinya.',
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description:
      '"Chaos Line" adalah refleksi tentang kehidupan yang tidak pernah berjalan dalam garis lurus. Melalui tumpukan garis, goresan, dan pertemuan warna yang tampak acak, karya ini menggambarkan kekacauan yang sering hadir dalam pikiran manusia—antara harapan dan ketakutan, antara keputusan dan keraguan, antara masa lalu dan masa depan.
Garis-garis yang saling bertabrakan menjadi simbol perjalanan hidup yang penuh konflik, tekanan, dan perubahan yang tidak dapat diprediksi. Namun di balik kekacauan tersebut, terdapat ritme dan keteraturan yang tersembunyi. Setiap garis memiliki arah, setiap tumpang tindih memiliki alasan, sebagaimana setiap pengalaman dalam hidup membentuk siapa diri kita sebenarnya.
"Chaos Line" mengajak penikmat untuk melihat bahwa kekacauan bukanlah sesuatu yang harus selalu dihindari. Justru dari situ lahir pertumbuhan, kreativitas, dan pemahaman baru. Kadang manusia baru menemukan jalannya setelah tersesat di antara berbagai kemungkinan.

Filosofis Pendamping
"Tidak semua yang tampak berantakan kehilangan makna. Beberapa hal harus kacau terlebih dahulu sebelum menemukan bentuknya.',
  },

  {
    id: 3,
    title: 'Tropical Leaves',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan3.jpg',
    description:
      '"Tropical Leaves" merupakan perayaan terhadap kehidupan, pertumbuhan, dan hubungan manusia dengan alam. Terinspirasi oleh rimbunnya dedaunan tropis yang tumbuh subur di iklim hangat, karya ini menggambarkan bagaimana alam terus berkembang dengan caranya sendiri—tenang, sabar, dan penuh daya hidup.
Setiap helai daun dalam lukisan ini melambangkan proses pertumbuhan yang berbeda. Ada yang berkembang sempurna, ada yang terluka oleh waktu, dan ada yang masih terus mencari cahaya. Seperti manusia, setiap daun memiliki perjalanan dan cerita yang unik. Warna-warna yang hidup mencerminkan energi, harapan, dan keberagaman kehidupan yang saling terhubung dalam satu ekosistem.
Melalui Tropical Leaves, penikmat diajak untuk menghargai keindahan yang hadir dalam hal-hal sederhana. Alam mengajarkan bahwa pertumbuhan tidak selalu harus cepat atau mencolok; terkadang ia hadir perlahan namun tetap kuat dan bermakna.

Filosofis Pendamping
"Daun tidak pernah terburu-buru untuk tumbuh, namun ia selalu tiba pada bentuk terbaiknya.',
  },

  {
    id: 4,
    title: 'Green Field',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description:
      '"Green Field" adalah representasi tentang ketenangan, harapan, dan ruang untuk bertumbuh. Hamparan hijau yang luas dalam karya ini melambangkan kehidupan yang terus bergerak dan berkembang, sekaligus menjadi simbol kebebasan bagi pikiran untuk beristirahat dari hiruk-pikuk dunia.
Ladang hijau bukan hanya sebuah pemandangan alam, melainkan metafora tentang kemungkinan yang belum terjamah. Setiap helai rumput menggambarkan langkah-langkah kecil yang sering kali luput dari perhatian, namun secara perlahan membentuk perjalanan yang lebih besar. Warna hijau yang mendominasi menghadirkan kesan keseimbangan, kesegaran, dan optimisme terhadap masa depan.
Melalui Green Field, penikmat diajak untuk merenungkan bahwa tidak semua pertumbuhan terjadi secara dramatis. Seperti ladang yang menjadi hijau karena proses yang panjang, manusia pun berkembang melalui waktu, kesabaran, dan ketekunan yang sering kali tidak terlihat oleh orang lain.

Filosofis Pendamping
"Hamparan yang tenang sering menyimpan kehidupan yang paling kuat.',
  },

  {
    id: 5,
    title: 'Angel',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan5.jpg',
    description:
      '"Angel" adalah refleksi tentang cahaya, perlindungan, dan kehadiran yang tak selalu terlihat namun dapat dirasakan. Sosok malaikat dalam karya ini tidak hanya dimaknai sebagai makhluk spiritual, tetapi juga sebagai simbol harapan, kebaikan, dan kekuatan yang hadir di saat manusia merasa rapuh.
Melalui bentuk, warna, dan suasana yang tercipta, Angel menggambarkan hubungan antara dunia yang nyata dan ruang batin yang penuh doa, harapan, serta pencarian makna. Sosok malaikat menjadi representasi dari suara lembut yang mengingatkan manusia untuk tetap percaya, bahkan ketika jalan di depan tampak gelap dan tidak pasti.
Karya ini mengajak penikmat untuk merenungkan bahwa setiap orang memiliki "malaikat" dalam hidupnya—bisa berupa seseorang yang memberi dukungan, sebuah kenangan yang menguatkan, atau keyakinan yang menjaga mereka tetap melangkah. Kehadiran tersebut mungkin tidak selalu terlihat, tetapi jejaknya dapat dirasakan dalam setiap keputusan dan perjalanan hidup.

Filosofis Pendamping
"Saat dunia menjadi terlalu bising, cahaya yang paling lembut sering kali datang dari tempat yang tidak terlihat.',
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description:
      '"Pertaruhan" adalah refleksi tentang keberanian manusia dalam menghadapi ketidakpastian. Dalam kehidupan, setiap pilihan yang diambil selalu mengandung risiko; tidak ada jaminan kemenangan, tidak ada kepastian hasil. Namun justru di situlah makna perjuangan ditemukan.
Karya ini menggambarkan momen ketika seseorang berdiri di antara rasa takut dan harapan, antara kehilangan dan kemungkinan. Setiap elemen visual dalam lukisan menjadi simbol keputusan-keputusan yang harus diambil meski masa depan belum terlihat jelas. Pertaruhan yang dimaksud bukan sekadar tentang menang atau kalah, melainkan tentang keberanian untuk tetap melangkah ketika hasilnya belum diketahui.
Melalui Pertaruhan, penikmat diajak untuk merenungkan bahwa hidup sendiri adalah sebuah taruhan. Kita mempertaruhkan waktu untuk mimpi, tenaga untuk tujuan, dan keyakinan untuk sesuatu yang kita percaya akan bermakna. Tidak semua pertaruhan berakhir dengan kemenangan, tetapi setiap keberanian untuk mencoba akan selalu meninggalkan pelajaran yang berharga.

Filosofis Pendamping
"Masa depan tidak pernah diberikan kepada mereka yang menunggu, tetapi kepada mereka yang berani mempertaruhkannya.', 
  },

  {
    id: 7,
    title: 'Gadis Kecil',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan7.jpg',
    description:
      '"Gadis Kecil" adalah refleksi tentang kepolosan, harapan, dan mimpi-mimpi yang masih tumbuh. Sosok gadis dalam karya ini menjadi simbol masa ketika dunia dipandang dengan rasa ingin tahu yang besar, sebelum berbagai pengalaman membentuk cara kita melihat kehidupan.
Melalui ekspresi, gestur, dan suasana yang dihadirkan, lukisan ini menggambarkan kepekaan seorang anak terhadap dunia di sekitarnya. Ia berdiri sebagai lambang harapan yang belum tercemar oleh ketakutan, serta keberanian untuk bermimpi tanpa batas. Di balik kesederhanaannya, terdapat kekuatan besar yang sering terlupakan: kemampuan untuk tetap percaya pada kemungkinan-kemungkinan baik.
"Gadis Kecil" juga mengajak penikmat untuk kembali mengingat bagian terdalam dari diri mereka—sosok anak yang pernah penuh imajinasi, rasa penasaran, dan keyakinan bahwa segala sesuatu mungkin untuk dicapai. Karya ini menjadi pengingat bahwa seiring bertambahnya usia, kita tidak harus kehilangan kemampuan untuk berharap dan bermimpi.

Filosofis Pendamping
"Di matanya tersimpan langit yang luas, tempat mimpi-mimpi kecil belajar terbang.',
  },

  {
    id: 8,
    title: 'Twin Macaws',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan8.jpg',
    description:  
      '"Twin Macaw" adalah refleksi tentang kebersamaan, keseimbangan, dan hubungan yang tumbuh melalui kepercayaan. Dua burung macaw yang hadir berdampingan dalam karya ini melambangkan dua jiwa yang berbeda, namun mampu hidup dalam harmoni tanpa kehilangan identitas masing-masing.
Macaw dikenal dengan warna-warnanya yang cerah dan karakter yang kuat. Dalam lukisan ini, warna-warna tersebut menjadi simbol keberagaman pengalaman, emosi, dan kepribadian yang saling melengkapi. Kehadiran dua macaw yang berdampingan menunjukkan bahwa kekuatan sebuah hubungan tidak terletak pada kesamaan, melainkan pada kemampuan untuk menerima perbedaan dan tetap bertumbuh bersama.
Melalui Twin Macaw, penikmat diajak untuk merenungkan makna persahabatan, cinta, keluarga, maupun hubungan antarmanusia yang dibangun atas dasar saling menghargai. Seperti dua burung yang terbang di langit yang sama, setiap individu memiliki arah dan kebebasannya sendiri, namun tetap dapat menemukan ruang untuk berjalan berdampingan.

Kalimat Filosofis Pendamping
"Kebersamaan bukan tentang menjadi sama, melainkan tentang tetap berdiri berdampingan di tengah perbedaan.',
  },

  {
    id: 9,
    title: 'Perempuan dalam Kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description:
      '"Perempuan dalam Kegelapan" adalah refleksi tentang kekuatan yang lahir dari kesunyian, luka yang disimpan dalam diam, dan cahaya yang tetap bertahan di tengah bayang-bayang kehidupan. Karya ini menggambarkan sosok perempuan yang berdiri di antara kerentanan dan keteguhan, menghadapi ruang gelap yang sering kali tidak terlihat oleh orang lain.
Kegelapan dalam lukisan ini bukan sekadar absennya cahaya, melainkan simbol dari ketakutan, kesedihan, kehilangan, dan pergulatan batin yang menjadi bagian dari perjalanan manusia. Namun di dalam ruang yang sunyi tersebut, sosok perempuan tetap hadir sebagai lambang ketahanan. Ia tidak digambarkan sebagai sosok yang kalah oleh kegelapan, melainkan seseorang yang sedang belajar memahami dirinya sendiri di tengah ketidakpastian.
Melalui Perempuan dalam Kegelapan, penikmat diajak untuk melihat bahwa kekuatan sejati tidak selalu tampak dalam keberanian yang lantang. Terkadang, kekuatan terbesar hadir dalam kemampuan untuk tetap bertahan, tetap berharap, dan tetap menjaga cahaya kecil di dalam diri ketika dunia terasa begitu gelap.

Filosofis Pendamping
"Kegelapan tidak selalu datang untuk menenggelamkan cahaya; terkadang ia hadir agar kita menyadari bahwa cahaya itu masih ada.',
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description:
      '"Malam Indah yang Sepi" adalah refleksi tentang keheningan yang tidak selalu berarti kesepian. Karya ini menggambarkan sebuah malam yang tenang, ketika dunia seolah melambat dan memberi ruang bagi manusia untuk mendengar suara-suara yang sering tenggelam dalam kesibukan sehari-hari.
Keindahan malam dalam lukisan ini menjadi simbol ketenangan batin, sementara kesunyian yang menyertainya menggambarkan momen perenungan dan perjumpaan dengan diri sendiri. Di bawah langit yang gelap dan luas, manusia diingatkan akan betapa kecilnya dirinya, namun sekaligus betapa dalamnya pikiran, kenangan, dan harapan yang ia miliki.
Melalui Malam Indah yang Sepi, penikmat diajak untuk melihat bahwa kesunyian bukanlah kekosongan. Di dalamnya terdapat ruang untuk mengingat, memahami, dan menerima berbagai hal yang selama ini terabaikan. Malam menjadi sahabat yang tidak berbicara, tetapi mampu menyimpan begitu banyak cerita.

Filosofis Pendamping
"Tidak semua kesunyian harus diisi; beberapa di antaranya diciptakan untuk dinikmati.',
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description:
      'Terinspirasi dari pohon besar yang tumbuh di desa, karya ini menggambarkan bagaimana sesuatu yang kuat dan agung selalu berawal dari kesederhanaan dan waktu yang panjang.
Pohon besar dalam lukisan ini menjadi simbol keteguhan hidup—ia berdiri diam, tetapi menyimpan sejarah panjang di dalam batang dan akarnya. Ia menjadi saksi perubahan musim, aktivitas manusia, dan perjalanan waktu di desa yang terus bergerak namun tetap menjaga kesederhanaannya.
Melalui Setunjung, penikmat diajak untuk memahami bahwa manusia juga seperti pohon: butuh akar yang kuat (nilai, keluarga, dan asal-usul), butuh proses untuk tumbuh, dan butuh kesabaran untuk menjadi “besar” tanpa kehilangan tempat berpijak.

Kalimat Filosofis Pendamping
"Yang tumbuh paling tinggi selalu pernah menjadi sesuatu yang paling sederhana di tanah yang sama.',
  },

  {
    id: 12,
    title: 'Silent Nature',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan12.jpg',
    description:
      '"Silent Nature" adalah refleksi tentang alam yang berbicara tanpa suara. Karya ini menangkap momen ketika dunia alami berada dalam keadaan paling tenang—di mana angin, pepohonan, air, dan cahaya seolah berkomunikasi dalam bahasa yang tidak terdengar, tetapi dapat dirasakan.
Keheningan dalam alam bukan berarti kosong, melainkan penuh dengan kehidupan yang bergerak secara perlahan dan harmonis. Setiap elemen dalam lukisan ini menggambarkan keseimbangan yang rapuh namun kuat: pohon yang berdiri tanpa suara, sungai yang mengalir pelan, dan langit yang menyimpan waktu dalam diam.
Melalui Silent Nature, penikmat diajak untuk kembali menyadari bahwa ketenangan adalah bagian penting dari kehidupan yang sering terlupakan. Di tengah dunia yang bising, alam mengajarkan bahwa tidak semua hal harus disuarakan untuk bisa dimengerti—beberapa cukup dihayati.
  
Filosofis Pendamping
"Alam tidak pernah benar-benar diam; ia hanya berbicara dengan cara yang lebih pelan dari manusia.',
  },
];

export default function Gallery() {
  const [selected, setSelected] =
    useState<(typeof artworks)[0] | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 px-6 lg:px-10 bg-[#14070d]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-white/40 uppercase tracking-[0.3em] text-xs mb-4">
            Original Collection
          </p>

          <h2 className="text-white text-5xl font-bold">
            Gallery
          </h2>

          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {artworks.map((art) => (

            <div
              key={art.id}
              onClick={() => setSelected(art)}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                cursor-pointer
              "
            >

              <img
                src={art.src}
                alt={art.title}
                loading="lazy"
                className="
                  w-full
                  aspect-[4/5]

                  object-cover
                  object-center

                  transition-transform
                  duration-700

                  group-hover:scale-[1.03]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80" />

              <div className="absolute bottom-0 p-6">

                <h3 className="text-white text-xl font-semibold">
                  {art.title}
                </h3>

                <p className="text-white/60 text-sm">
                  {art.media} • {art.year}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

      {selected && (

        <div
          className="
            fixed
            inset-0
            z-50

            bg-black/95

            overflow-y-auto
          "
          onClick={() => setSelected(null)}
        >

          <div
            className="
              min-h-screen
              flex
              items-center
              justify-center
              p-3
            "
          >

            <div
              onClick={(e) => e.stopPropagation()}
              className="
                relative

                w-full
                max-w-7xl

                bg-[#14070d]

                rounded-3xl

                overflow-hidden
              "
            >

              <button
                onClick={() => setSelected(null)}
                className="
                  absolute
                  top-5
                  right-5

                  z-50

                  text-white
                "
              >
                <X size={34} />
              </button>

              <div
                className="
                  flex
                  flex-col

                  landscape:flex-row

                  lg:grid
                  lg:grid-cols-2
                "
              >

                <div
                  className="
                    bg-black

                    flex
                    justify-center
                    items-center

                    p-4
                  "
                >

                  <img
                    src={selected.src}
                    alt={selected.title}
                    className="
                      block

                      object-contain

                      max-w-full

                      w-auto
                      h-auto

                      max-h-[55svh]

                      landscape:max-w-[50vw]
                      landscape:max-h-[80svh]

                      lg:max-w-full
                      lg:max-h-[85svh]
                    "
                  />

                </div>

                <div
                  className="
                    text-white

                    p-8

                    overflow-y-auto

                    max-h-[40svh]

                    landscape:w-[50vw]
                    landscape:max-h-[80svh]

                    lg:max-h-[85svh]
                  "
                >

                  <h2 className="text-3xl md:text-5xl font-bold mb-3">
                    {selected.title}
                  </h2>

                  <p className="text-white/50 mb-8">
                    {selected.media} • {selected.year}
                  </p>

                  <p
                    className="
                      text-white/80

                      leading-8

                      text-base
                      md:text-lg

                      whitespace-pre-line
                    "
                  >
                    {selected.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
}
