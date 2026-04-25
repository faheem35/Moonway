import { useState } from 'react'
import ceo from '../assets/aboutus/ceo.jpeg'
import cert1 from '../assets/aboutus/cert1.jpeg'
import cert2 from '../assets/aboutus/cert2.jpeg'
import cert3 from '../assets/aboutus/cert3.jpeg'
import license1 from '../assets/aboutus/license1.jpeg'
import license2 from '../assets/aboutus/license2.jpeg'

export default function AboutUs() {
  const [zoomedImage, setZoomedImage] = useState(null)

  return (
    <main className="w-full pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Leading construction company with over 20 years of excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Moonway General Contracting is a leading construction and design company based in the UAE. With over two decades of experience, we have established ourselves as a trusted partner for residential, commercial, and industrial projects.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our commitment to quality, innovation, and customer satisfaction has made us one of the most respected names in the construction industry. We pride ourselves on delivering projects on time, within budget, and to the highest standards of craftsmanship.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From general contracting to interior design and specialized fitout works, we offer comprehensive solutions to meet your project requirements.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
                alt="Company Overview"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the experts behind our success</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 text-center max-w-sm w-full">
              <div className="w-72 h-80 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={ceo}
                  alt="ceo-img"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Moustafa Nehro Mohamed Mohamed Haggag</h3>
              <p className="text-yellow-500 font-semibold text-lg">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-lg text-gray-600">International quality and safety standards</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: cert1, label: 'ISO 45001:2018' },
              { img: cert2, label: 'ISO 9001:2015' },
              { img: cert3, label: 'ISO 14001:2015' },
            ].map((cert, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setZoomedImage(cert.img)}
              >
                <div className="relative overflow-hidden h-76">
                  <img
                    src={cert.img}
                    alt={cert.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-700 font-semibold">{cert.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Licenses & Permits</h2>
            <p className="text-lg text-gray-600">Official authorizations and compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    { img: license1, label: 'Engineering License' },
    { img: license2, label: 'Trade License' },
  ].map((license, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={() => setZoomedImage(license.img)}
    >
      <div className="relative overflow-hidden h-96">
        <img
          src={license.img}
          alt={license.label}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-4xl">🔍</span>
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-700 font-semibold">{license.label}</p>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 mb-10 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-yellow-400 text-5xl">🎯</span>
                <span>Our Mission</span>
              </h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                To deliver exceptional construction and design solutions that exceed client expectations, transform spaces into valuable assets, and contribute to the sustainable development of the UAE.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="text-yellow-400 text-5xl">⭐</span>
                <span>Our Vision</span>
              </h3>
              <p className="text-gray-900 leading-relaxed text-lg">
                To be the most trusted and innovative construction company in the region, known for quality, integrity, and customer satisfaction in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zoom Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-6 right-6 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40 transition-colors duration-300 z-10"
          >
            ✕
          </button>
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </main>
  )
}