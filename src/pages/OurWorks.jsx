import { useState } from 'react'
import { projects } from '../data'

export default function OurWorks() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <main className="w-full pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Works</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our completed and ongoing projects
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { name: 'All Projects', value: 'all' },
              { name: 'Completed', value: 'completed' },
              { name: 'Ongoing', value: 'ongoing' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                  filter === option.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-4xl">🔍</span>
                  </div>
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 rounded-full font-semibold text-white text-sm ${
                      project.category === 'completed'
                        ? 'bg-green-500'
                        : 'bg-blue-500'
                    }`}>
                      {project.category === 'completed' ? '✓ Completed' : '⏳ Ongoing'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2 flex items-center justify-center gap-2">
                    <span>📍</span>
                    <span>{project.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-xl text-gray-600">No projects found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 mb-10 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '50+',  label: 'Completed Projects' },
              { number: '15+',  label: 'Ongoing Projects' },
              { number: '200+', label: 'Happy Clients' },
              { number: '20+',  label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-5xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    {/* Lightbox */}
{selectedProject && (
  <div
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
    onClick={() => setSelectedProject(null)}
  >
    {/* Close Button */}
    <button
      onClick={() => setSelectedProject(null)}
      className="absolute top-6 right-6 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-white/40 transition-colors duration-300 z-10"
    >
      ✕
    </button>

    {/* Image Only */}
   <img
  src={selectedProject.image}
  alt={selectedProject.title}
  className="max-h-[95vh] max-w-[95vw] object-contain rounded-xl shadow-2xl"
  onClick={(e) => e.stopPropagation()}
/>
  </div>
)}
    </main>
  )
}