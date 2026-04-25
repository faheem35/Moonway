import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import video1 from '../assets/CarouselVid1.mp4'
import video2 from '../assets/CarouselVid2.mp4'
import video3 from '../assets/CarouselVid3.mp4'

export default function VideoCarousel() {
  const navigate = useNavigate()

  const videos = [
    {
      id: 1,
      title: 'Building Tomorrow',
      subtitle: 'Modern Construction Solutions',
      url: video1
    },
    {
      id: 2,
      title: 'Crafted with Excellence',
      subtitle: 'Premium Interior Design Services',
      url: video2
    },
    {
      id: 3,
      title: 'Engineering Precision',
      subtitle: 'Advanced Construction Technology',
      url: video3
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef([])

  // Play/pause videos when slide changes
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === currentIndex) {
        video.currentTime = 0
        video.play()
      } else {
        video.pause()
      }
    })
  }, [currentIndex])

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [videos.length])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden pt-20">

      {/* Video Slides */}
      <div className="relative w-full h-full">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="absolute inset-0 w-full h-full object-cover"
              src={video.url}
              muted
              loop
              playsInline
            />

            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-20 px-4">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {videos[currentIndex].title}
            </h1>

            <p className="text-xl md:text-3xl text-gray-200 mb-8 font-light">
              {videos[currentIndex].subtitle}
            </p>

            {/* Updated Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              
              <button
                onClick={() => navigate('/contact-us')}
                className="px-8 py-3 bg-accent text-secondary rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300 cursor-pointer"
              >
                Get a Quote
              </button>

              <button
                onClick={() => navigate('/our-works')}
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-600 transition-colors duration-300 cursor-pointer"
              >
                View Projects
              </button>

            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-accent w-8'
                  : 'bg-white/50 w-3 hover:bg-white'
              }`}
            />
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() =>
            setCurrentIndex(
              (prev) => (prev - 1 + videos.length) % videos.length
            )
          }
          className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors duration-300"
        >
          ❮
        </button>

        {/* Right Arrow */}
        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % videos.length)
          }
          className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-4 rounded-full transition-colors duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  )
}