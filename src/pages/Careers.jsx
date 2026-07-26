import { jobOpenings } from '../data'

export default function Careers() {
  // const handleApply = (jobTitle) => {
  //   const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=info@moonwayuae.com&su=Job%20Application:%20${encodeURIComponent(jobTitle)}`
  //   window.open(mailtoLink, '_blank')
  // }

const handleApply = (jobTitle) => {
  window.location.href = `mailto:info@moonwayuae.com?subject=${encodeURIComponent(
    `Job Application: ${jobTitle}`
  )}`;
};
  return (
    <main className="w-full pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Build a rewarding career with UAE's leading construction company
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Join Moonway?</h2>
            <p className="text-lg text-gray-600">We offer more than just a job - we offer a career and a community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '💼', title: 'Career Growth', desc: 'Clear career path and continuous learning opportunities' },
              { icon: '💰', title: 'Competitive Salary', desc: 'Industry-leading compensation packages' },
              { icon: '🏅', title: 'Benefits', desc: 'Health insurance, retirement plans, and wellness programs' },
              { icon: '👥', title: 'Team Culture', desc: 'Work in a collaborative and supportive environment' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-lg text-gray-600">We're looking for talented individuals to join our growing team</p>
          </div>

          {jobOpenings.length > 0 ? (
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-400 relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Urgent Hiring Badge */}
                  <span className="absolute -top-3 left-8 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-md animate-pulse">
                    🔥 URGENT HIRING
                  </span>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch mt-3">
                    {/* Job Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex gap-4 flex-wrap text-gray-600 mb-2">
                            <span className="flex items-center gap-1">
                              <span>📍</span> {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <span>🕐</span> {job.type}
                            </span>
                          </div>
                          {/* Position Count */}
                          <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">
                            {job.openings || 30} Positions Open
                          </span>
                        </div>
                      </div>

                      {/* What Company Provides */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What we provide:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            { icon: '🛂', label: 'Employment Visa' },
                            { icon: '💵', label: 'Attractive Salary' },
                            { icon: '🏠', label: 'Accommodation' },
                            { icon: '⏱️', label: 'Overtime Pay' },
                          ].map((perk, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 text-sm text-gray-700 min-w-0"
                            >
                              <span className="shrink-0">{perk.icon}</span>
                              <span className="break-words leading-snug">{perk.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">What we're looking for:</h4>
                        <ul className="text-gray-600 text-sm space-y-1 list-disc list-inside">
                          <li>Relevant experience in your field</li>
                          <li>Professional certifications and licenses</li>
                          <li>Strong problem-solving skills</li>
                          <li>Excellent communication abilities</li>
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="lg:col-span-1 flex flex-col items-center justify-center h-full gap-3">
                      <button
                        onClick={() => handleApply(job.title)}
                        className="w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold hover:bg-yellow-500 transition-colors duration-300 text-center cursor-pointer"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600 mb-4">No positions available at the moment</p>
              <p className="text-gray-500">
                Please check back soon or send us your CV for future opportunities
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@moonwayuae.com&su=CV%20Submission%20-%20Future%20Opportunities"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-6 px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Send Your CV
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600">Simple and transparent hiring process</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Submit Application', desc: 'Fill out the application form and send your CV via email' },
              { step: 2, title: 'Initial Review', desc: 'Our HR team reviews your application and qualifications' },
              { step: 3, title: 'Interview', desc: "If selected, you'll be invited for an interview with our team" },
              { step: 4, title: 'Offer & Onboarding', desc: 'Receive your offer and join our growing team' }
            ].map((item, index) => (
              <div key={index} className="relative mt-6" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-lg z-10">
                  {item.step}
                </div>
                {/* Card */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center pt-12 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Banner */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🏗️</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be Part of Something Big
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            At Moonway, we build more than structures — we build careers. Join a team that values hard work, creativity, and dedication to excellence across every project we deliver in the UAE.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '🤝', title: 'Collaborative Culture', desc: 'Work alongside experienced professionals who support your growth every step of the way.' },
              { icon: '📈', title: 'Real Growth', desc: 'We invest in our people with training, mentorship, and clear paths to advancement.' },
              { icon: '🌍', title: 'Impactful Work', desc: 'Be part of projects that shape the skyline and communities across the UAE.' },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Didn't Find a Matching Position?
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            We're always looking for talented individuals. Send us your CV and we'll keep it on file for future opportunities.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@moonwayuae.com&su=CV%20Submission%20for%20Future%20Opportunities"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Send Your CV
          </a>
        </div>
      </section>

    </main>
  )
}