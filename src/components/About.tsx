import { Palette, Award, Heart } from 'lucide-react';

const stats = [
  {
    label: 'Karya Selesai',
    value: '50+',
  },

  {
    label: 'Karya Terkoleksi',
    value: '10+',
  },
];

const values = [
  {
    icon: Palette,
    title: 'Impressionisme & Abstract',
  },

  {
    icon: Award,
    title: 'Certification of Authenticator',
  },

  {
    icon: Heart,
    title: 'Original Art Painting',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6 lg:px-10 bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
            Story
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold">
            About
          </h2>

          <div className="w-16 h-px bg-white/20 mx-auto mt-6" />

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <div
              className="
                aspect-[4/5]
                rounded-3xl
                overflow-hidden
              "
            >

              <img
                src="/images/about-art.jpg"
                alt="About NFGallery"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

            </div>

          </div>

          {/* CONTENT */}
          <div>

            <h3
              className="
                text-white
                text-3xl
                md:text-4xl
                font-bold
                leading-snug
                mb-6
              "
            >
              Hallo, Are You Happy Today?
              <br />

              <span
                className="
                  italic
                  font-light
                  text-white/70
                "
              >
                MAKE COLORS IN YOUR LIFE
              </span>

            </h3>

            <p
              className="
                text-white/60
                text-base
                leading-relaxed
                mb-10
              "
            >
              Perkenalkan saya Nur Fatah dari Rembang, Jawa Tengah.

              NFGALLERY adalah ruang kreatif yang menghadirkan karya
              impressionisme dan ekspresif yang terhubung dengan
              kehidupan serta alam.

              Setiap karya memiliki sudut pandang dan makna berbeda
              bagi setiap orang. Saya mencoba menghadirkan lukisan
              sebagai rumah bagi warna, imajinasi, dan emosi yang saya
              tuangkan ke dalam kanvas.

              Semoga melalui galeri kecil ini, ada orang-orang yang
              dapat menikmati dan menemukan makna dari karya yang saya
              tampilkan.
            </p>

            {/* STATS */}
            <div className="flex gap-10 mb-10">

              {stats.map((s) => (

                <div key={s.label}>

                  <p className="text-white text-3xl font-bold">
                    {s.value}
                  </p>

                  <p className="text-white/40 text-xs mt-1">
                    {s.label}
                  </p>

                </div>

              ))}

            </div>

            {/* VALUES */}
            <div className="flex flex-col gap-5">

              {values.map(({ icon: Icon, title }) => (

                <div
                  key={title}
                  className="flex gap-4"
                >

                  <div
                    className="
                      w-10
                      h-10
                      rounded-full
                      border
                      border-white/20

                      flex
                      items-center
                      justify-center

                      flex-shrink-0
                    "
                  >

                    <Icon
                      size={16}
                      className="text-white/70"
                    />

                  </div>

                  <p className="text-white text-sm font-medium">
                    {title}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}