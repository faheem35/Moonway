import client1 from '../assets/clients/client1.jpg'
import client2 from '../assets/clients/client2.jpg'
import client3 from '../assets/clients/client3.jpg'
import client4 from '../assets/clients/client4.jpg'
import client5 from '../assets/clients/client5.jpg'
import client6 from '../assets/clients/client6.jpg'
import client7 from '../assets/clients/client7.jpg'
import client8 from '../assets/clients/client8.jpg'
import client9 from '../assets/clients/client9.jpg'
import client10 from '../assets/clients/client10.jpg'
import client11 from '../assets/clients/client11.jpg'
import client12 from '../assets/clients/client12.jpg'
import client13 from '../assets/clients/client13.png'
import client14 from '../assets/clients/client14.png'
import client15 from '../assets/clients/client15.jpg'
import client16 from '../assets/clients/client16.jpg'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import VideoCarousel from '../components/VideoCarousel'
import { whatWeDo } from '../data'
import WhatsAppChat from '../components/WhatsAppChat'

export default function Home() {
  const [messageForm, setMessageForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)

    emailjs.send(
      'service_vkpsb99',
      'template_ppggbch',
      {
        name: messageForm.name,
        email: messageForm.email,
        phone: messageForm.phone,
        subject: messageForm.subject,
        message: messageForm.message,
      },
      'neFXAspEU5WZyGJOm'
    )
    .then(() => {
      setSending(false)
      alert('Message sent successfully!')
      setMessageForm({ name: '', email: '', phone: '', subject: '', message: '' })
    })
    .catch((error) => {
      setSending(false)
      alert('Failed to send message. Please try again.')
      console.error('EmailJS error:', error)
    })
  }

  return (
    <main className="w-full">
      {/* Hero Video Section */}
      <VideoCarousel />

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver comprehensive construction and design solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300">Numbers that speak for our excellence and dedication</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '150+', label: 'Projects Completed', icon: '🏗️' },
              { number: '12+',  label: 'Years Experience',   icon: '📅' },
              { number: '50+',  label: 'Happy Clients',      icon: '🤝' },
              { number: '100%', label: 'UAE Wide Coverage',  icon: '🗺️' },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center bg-white/10 backdrop-blur-sm border border-white/20 hover:border-yellow-400 hover:bg-white/15 transition-all duration-300 rounded-2xl p-8 group"
              >
                <span className="text-5xl mb-4">{stat.icon}</span>
                <span className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </span>
                <span className="text-gray-300 text-base md:text-lg font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-white overflow-hidden">
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee 35s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
            <p className="text-lg text-gray-600">Our clients range from real estate developers to corporations across the UAE</p>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-10 whitespace-nowrap marquee-track">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-10 flex-shrink-0">
                  {[client1, client2, client3, client4, client5, client6, client7, client8,
                    client9, client10, client11, client12, client13, client14, client15, client16
                  ].map((src, index) => (
                    <div
                      key={`${setIndex}-${index}`}
                      className="inline-flex items-center justify-center bg-gray-50 rounded-xl px-8 py-5 shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[180px] h-28 flex-shrink-0"
                    >
                      <img
                        src={src}
                        alt={`Client ${index + 1}`}
                        className="max-h-20 max-w-[150px] object-contain transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Send us a Message</h2>
              <p className="text-lg text-gray-600">Have a question? We'd love to hear from you. Drop us a message and we'll get back to you as soon as possible.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={messageForm.phone}
                    onChange={(e) => setMessageForm({ ...messageForm, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="+971 50 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={messageForm.subject}
                    onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  required
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your message..."
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
        </div>
      </section>

      {/* WhatsApp Chat Button */}
      <WhatsAppChat />
    </main>
  )
}