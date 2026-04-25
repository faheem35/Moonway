import { whatWeDo } from '../data'
import { useNavigate } from 'react-router-dom'

export default function Services() {
  const navigate = useNavigate()
  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Complete construction and design solutions tailored to your project needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
     
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p className="text-lg text-gray-600">Numbers that speak for our excellence and dedication</p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
      {[
        { number: '150+', label: 'Projects Completed', icon: '🏛️' },
        { number: '12+',  label: 'Years Experience',   icon: '⏳' },
        { number: '50+',  label: 'Happy Clients',      icon: '👥' },
        { number: '100%', label: 'UAE Wide Coverage',  icon: '🗺️' },
      ].map((stat, index) => (
        <div key={index} className="text-center p-8 bg-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 group">
          <div className="text-5xl mb-4">{stat.icon}</div>
          <h3 className="text-4xl font-extrabold text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stat.number}
          </h3>
          <p className="text-gray-600 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
   <section className="py-20 my-10 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your construction or design project.
          </p>
          <button
  onClick={() => navigate('/contact-us')}
  className="px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300 cursor-pointer"
>
  Get Free Quote
</button>
        </div>
      </section>
    </main>
  )
}