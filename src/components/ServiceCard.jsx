import { useState } from 'react'

export default function ServiceCard({ service, index }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Card */}
      <div 
        onClick={() => setIsOpen(true)}
        className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer hover:border-primary transform hover:scale-105"
      >
        <div className="text-5xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{service.shortDesc}</p>
        <button className="text-primary font-semibold hover:gap-2 flex items-center gap-1 transition-all duration-300">
          View Details <span>→</span>
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-3xl font-bold text-secondary">{service.title}</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-3xl w-10 h-10 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">{service.fullDesc}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Key Features:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-accent text-xl font-bold">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-accent text-secondary rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                Request Quote
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 text-secondary rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
