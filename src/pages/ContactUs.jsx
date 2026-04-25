import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { companyData } from '../data'

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs.send(
      'service_vkpsb99',
      'template_ppggbch',
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      },
      'neFXAspEU5WZyGJOm'
    )
    .then(() => {
      setSending(false)
      alert('Thank you! We will get back to you soon.')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    })
    .catch((error) => {
      setSending(false)
      alert('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    })
  }

  return (
    <main className="w-full pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for your construction and design needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
  {[
    {
      icon: '📍',
      title: 'Address',
      content: companyData.address,
      link: '#'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: companyData.phone,
      link: `tel:${companyData.phone}`
    },
    {
      icon: '✉️',
      title: 'Email',
      content: companyData.email,
      link: `mailto:${companyData.email}`
    }
  ].map((info, index) => (
    <a
      key={index}
      href={info.link}
      className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 group block cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {info.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {info.title}
      </h3>

      <p className="text-gray-600 group-hover:text-yellow-500 transition-colors duration-300">
        {info.content}
      </p>
    </a>
  ))}
</div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">

              {/* Map */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-96">
                <iframe
                  title="Moonway General Contracting Location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.678829531849!2d54.371261275913696!3d24.496582559720476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67bb6ce243db%3A0xcc1b5b4c2e2e7ec2!2sMoonway%20general%20contracting!5e0!3m2!1sen!2sin!4v1777119927989!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-yellow-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </p>
                </div>
              </div>

              {/* Quick Services */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Services</h3>
                <ul className="space-y-2">
                  {[
                    'Free Project Consultation',
                    'Site Assessment',
                    'Detailed Quotations',
                    '24/7 Emergency Support'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <span className="text-yellow-400 text-xl font-bold">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Large Project?</h2>
          <p className="text-lg text-gray-600 mb-8">Schedule a consultation with our team to discuss your construction requirements</p>
        <a  
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@moonwayemirates.com&su=Consultation%20Request"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

    </main>
  )
}