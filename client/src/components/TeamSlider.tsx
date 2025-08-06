import  { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import member3 from '../assets/WhatsApp Image 2025-07-22 at 13.56.03_c8d6587f.jpg'
import member2 from '../assets/WhatsApp Image 2025-07-22 at 13.56.03_e4a3a4bf.jpg';
import member1 from "../assets/WhatsApp Image 2025-07-22 at 13.56.04_26bcf26f.jpg"

const teamMembers = [
  {
    id: 1,
    name: 'Michael Adodo. ',
    role: 'Chief Executive Officer. CEO',
    image: member1,
    description:
      'Dedicated healthcare professional with 15+ years of experience leading innovative healthcare solutions.',
  },
  {
    id: 2,
    name: 'Johnson Ajuwon.',
    role: 'Chief Financial Officer  CFO',
    image: member2,
    description:
      'Experienced nurse practitioner committed to providing exceptional patient care and team leadership.',
  },
  {
    id: 3,
    name: 'Abubakri Otegbeye.  ',
    role: 'Registered Manager ',
    image: member3,
    description:
      'Strategic operations leader focused on optimizing healthcare delivery and organizational efficiency.',
  }
]

const TeamSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(prev => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [])

  const getCurrentMember = () => teamMembers[currentIndex]
  const getNextMember = () => teamMembers[(currentIndex + 1) % teamMembers.length]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex  justify-between ">
      <div className=" max-w-[1500px] w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <motion.div
          className="space-y-6 p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-2">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Meet
              <br />
              the
              <br />
              Team
            </h1>
          </div>

          <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
            <motion.div
            //   key={currentIndex}
            //   initial={{ opacity: 0, y: 20 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   exit={{ opacity: 0, y: -20 }}
            //   transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {/* <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                {getCurrentMember().description}
              </p>

              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-gray-900">{getCurrentMember().name}</h3>
                <p className="text-blue-600 font-medium">{getCurrentMember().role}</p>
              </div> */}
              <p>
                Pure Hearts Solutions boasts a dedicated team of compassionate healthcare
                professionals, including support workers, nurses, and specialists. Committed to
                excellence, our team undergoes continuous training to provide personalized,
                high-quality care tailored to unique client needs.
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-4 pt-4">
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 group"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2 ml-4">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => !isAnimating && setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Slider Section */}
        <section className={` ${ currentIndex === 0 ? ' bg-slate-300' : currentIndex === 1 ? ' bg-brand-colour-primary' : currentIndex === 2? ' bg-brand-header': 'bg-white' } h-full w-full p-8`}>
          <div className="relative w-full h-full flex justify-center items-center   ">
            <div className="relative w-80 h-96 ">
              {/* Preview Image (Top) */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-32 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative z-50 w-full h-full rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={getNextMember().image}
                    alt={getNextMember().name}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-20" /> */}
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
                  <motion.div
                    key={currentIndex}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6,
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={getCurrentMember().image}
                      alt={getCurrentMember().name}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Name Overlay */}
                    <motion.div
                      className="absolute bottom-6 left-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <h3 className="text-xl font-semibold">{getCurrentMember().name}</h3>
                      <p className="text-blue-200 text-sm">{getCurrentMember().role}</p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-40"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TeamSlider
