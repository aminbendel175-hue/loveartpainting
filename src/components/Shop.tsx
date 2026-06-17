import { ShoppingBag } from 'lucide-react';

const artworks = [
  {
    id: 1,
    title: 'Simfony Sunyi',
    medium: 'Acrylic on Canvas',
    size: '100x100 cm',
    price: 'Rp 1.000.000',
    src: '/images/simfony-sunyi.jpg',
    soldOut: true,
  },
  {
    id: 2,
    title: 'Harmony of Nature',
    medium: 'Acrylic on Canvas',
    size: '100x100 cm',
    price: 'Rp 2.200.000',
    src: '/images/harmony-nature.jpg',
  },
  {
    id: 3,
    title: 'Penari',
    medium: 'Acrylic on Canvas',
    size: '40x60 cm',
    price: 'Rp 800.000',
    src: '/images/penari.jpg',
  },
  {
    id: 4,
    title: 'Fragments of Humanity',
    medium: 'Acrylic on Canvas',
    size: '100x50 cm',
    price: 'Rp 1.500.000',
    src: '/images/fragments-humanity.jpg',
  },
  {
    id: 5,
    title: 'Garden Of Dream',
    medium: 'Acrylic on Canvas',
    size: '200x100 cm',
    price: 'Rp 8.500.000',
    src: '/images/garden-dream.jpg',
  },
  {
    id: 6,
    title: 'The Light Beyond',
    medium: 'Acrylic on Canvas',
    size: '50x30 cm',
    price: 'Rp 500.000',
    src: '/images/light-beyond.jpg',
  },
  {
    id: 7,
    title: 'Whispering Grove',
    medium: 'Acrylic on Canvas',
    size: '30x30 cm',
    price: 'Rp 500.000',
    src: '/images/whispering-grove.jpg',
    soldOut: true,
  },
  {
    id: 8,
    title: 'Colors Of Life',
    medium: 'Acrylic on Canvas',
    size: '100x70 cm',
    price: 'Rp 1.000.000',
    src: '/images/colors-life.jpg',
  },
  {
    id: 9,
    title: 'Silent Passage',
    medium: 'Acrylic on Canvas',
    size: '55x30 cm',
    price: 'Rp 800.000',
    src: '/images/silent-passage.jpg',
  },
  {
    id: 10,
    title: 'Arah Pulang',
    medium: 'Acrylic on Canvas',
    size: '30x20 cm',
    price: 'Rp 300.000',
    src: '/images/arah-pulang.jpg',
  },
  {
    id: 11,
    title: 'Suaka Biru',
    medium: 'Acrylic on Canvas',
    size: '50x30 cm',
    price: 'Rp 600.000',
    src: '/images/suaka-biru.jpg',
  },
];

export default function Shop() {
  return (
    <section
      id="shop"
      className="py-28 px-6 lg:px-10 bg-[#14070d]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">

          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">
            Original Works
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            FOR SALE
          </h2>

          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />

        </div>

        {/* GALLERY */}
        <div className="columns-1 md:columns-2">

          {artworks.map((art) => (
            <div
              key={art.id}
              className="
                group
                mb-8
                break-inside-avoid
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                hover:bg-white/[0.06]
                transition-all
                duration-500
              "
            >

              {/* IMAGE */}
              <div className="relative bg-black/20">

                <img
                  src={art.src}
                  alt={art.title}
                  loading="lazy"
                  className={`
                    w-full
                    h-auto
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-[1.02]
                    ${art.soldOut ? 'opacity-60 grayscale' : ''}
                  `}
                />

                {art.soldOut && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">

                    <span
                      className="
                        px-6
                        py-3
                        rounded-full
                        bg-red-600
                        text-white
                        text-xs
                        font-bold
                        tracking-[0.25em]
                      "
                    >
                      SOLD OUT
                    </span>

                  </div>
                )}

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-white text-2xl font-semibold mb-2">
                  {art.title}
                </h3>

                <p className="text-white/50 text-sm">
                  {art.medium}
                </p>

                <p className="text-white/40 text-sm mb-6">
                  {art.size}
                </p>

                <div className="flex items-center justify-between gap-4">

                  <span className="text-white text-xl font-bold">
                    {art.price}
                  </span>

                  {art.soldOut ? (
                    <span className="px-5 py-3 rounded-full border border-white/20 text-white/40 text-sm">
                      Not Available
                    </span>
                  ) : (
                    <a
                      href={`https://wa.me/6287734609465?text=${encodeURIComponent(
                        `Halo NFGallery, saya tertarik dengan lukisan ${art.title}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        bg-white
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-black
                        hover:scale-105
                        transition
                      "
                    >
                      <ShoppingBag size={16} />
                      Order Now
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <p className="mt-14 text-center text-sm text-white/30">
          Pengiriman ke seluruh Indonesia maupun International •
          Custom order tersedia
        </p>

      </div>
    </section>
  );
}
