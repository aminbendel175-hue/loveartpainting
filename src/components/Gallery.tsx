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
      'Terinspirasi dari keindahan Gunung Rinjani di Lombok, karya ini menghadirkan perpaduan antara kekuatan alam dan ketenangan batin melalui warna-warna yang hidup dan dinamis.',
  },

  {
    id: 2,
    title: 'Chaos Line',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan2.jpg',
    description:
      'Chaos Line menggambarkan bahwa kehidupan tidak pernah berjalan dalam garis yang lurus.',
  },

  {
    id: 3,
    title: 'Tropical Leaves',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan3.jpg',
    description:
      'Tropical Leaves merepresentasikan hubungan manusia dengan alam sebagai sumber ketenangan dan kehidupan.',
  },

  {
    id: 4,
    title: 'Green Field',
    media: 'Acrylic on canvas',
    year: '2025',
    src: '/images/lukisan4.jpg',
    description:
      'Lukisan suasana persawahan hijau dengan dua pohon yang menghadirkan rasa tenang.',
  },

  {
    id: 5,
    title: 'Angel',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan5.jpg',
    description:
      'Goresan hitam dan putih melambangkan keseimbangan kehidupan antara bayangan dan cahaya.',
  },

  {
    id: 6,
    title: 'Pertaruhan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan6.jpg',
    description:
      'Potret seseorang yang mempertaruhkan langkah hidup antara menang dan kalah.',
  },

  {
    id: 7,
    title: 'Gadis Kecil',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan7.jpg',
    description:
      'Perempuan yang menyatu dengan dunia biru melambangkan ketenangan dan keharmonisan.',
  },

  {
    id: 8,
    title: 'Twin Macaws',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan8.jpg',
    description:
      'Dua burung macaw merah dengan komposisi close-up yang kuat dan penuh karakter.',
  },

  {
    id: 9,
    title: 'Perempuan dalam Kegelapan',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan9.jpg',
    description:
      'Di saat dunia terasa redup, ia memilih berenang bersama harapan-harapan kecil.',
  },

  {
    id: 10,
    title: 'Malam Indah Yang Sepi',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan10.jpg',
    description:
      'Tentang malam yang indah, sunyi, dan ruang kosong yang kadang hadir di setiap jiwa.',
  },

  {
    id: 11,
    title: 'Setunjung',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan11.jpg',
    description:
      'Pohon trembesi besar sebagai simbol kemakmuran dan identitas desa.',
  },

  {
    id: 12,
    title: 'Silent Nature',
    media: 'Acrylic on canvas',
    year: '2024',
    src: '/images/lukisan12.jpg',
    description:
      'Karya bernuansa alam yang membawa perasaan menemukan rumah di dalam sunyi.',
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