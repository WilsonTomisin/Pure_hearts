import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import image1 from '../assets/Group 19.png';
import image2 from '../assets/Group 591.png';
import image3 from '../assets/image 9.png';
import image4 from '../assets/image 18.png';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      url: image1,
      headerTitle: 'Welcome to  Pure hearts solutions',
      title: 'We Are Here to provide for Your ',
      subtitle: 'Discover breathtaking views at sunrise',
      description:
        "At Pure Hearts Solutions, we are dedicated to redefining healthcare staffing with a focus on personalized care and unwavering professionalism. Whether you're a healthcare provider seeking staffing solutions or a passionate professional looking for meaningful opportunities, you're in the right place. Explore our services, meet our dedicated team, and discover how Pure Hearts Solutions is shaping the future of healthcare staffing.  ",
    },
    {
      url: image2,
      headerTitle: 'Welcome to  Pure hearts solutions',
      title: 'We Are Here to provide for Your ',
      subtitle: 'Pure Hearts Solutions – Your Trusted Partner in Healthcare',
      description:
        "At Pure Hearts Solutions, we are dedicated to redefining healthcare staffing with a focus on personalized care and unwavering professionalism. Whether you're a healthcare provider seeking staffing solutions or a passionate professional looking for meaningful opportunities, you're in the right place. Explore our services, meet our dedicated team, and discover how Pure Hearts Solutions is shaping the future of healthcare staffing.  ",
    },
    {
      url: image3,
      headerTitle: 'Welcome to  Pure hearts solutions',
      title: 'We Are Here to provide for Your ',
      subtitle: 'Pure Hearts Solutions – Your Trusted Partner in Healthcare',
      description:
        "At Pure Hearts Solutions, we are dedicated to redefining healthcare staffing with a focus on personalized care and unwavering professionalism. Whether you're a healthcare provider seeking staffing solutions or a passionate professional looking for meaningful opportunities, you're in the right place. Explore our services, meet our dedicated team, and discover how Pure Hearts Solutions is shaping the future of healthcare staffing.",
    },
    {
      url: image4,
      headerTitle: 'Welcome to  Pure hearts solutions',
      title: 'We Are Here to provide for Your ',
      subtitle: 'Pure Hearts Solutions – Your Trusted Partner in Healthcare',
      description: "At Pure Hearts Solutions, we are dedicated to redefining healthcare staffing with a focus on personalized care and unwavering professionalism. Whether you're a healthcare provider seeking staffing solutions or a passionate professional looking for meaningful opportunities, you're in the right place. Explore our services, meet our dedicated team, and discover how Pure Hearts Solutions is shaping the future of healthcare staffing.",
    },
  ]
  const nextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index:number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative w-full -top-40  mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl">
      {/* Main carousel container */}
      <div className="relative h-96 md:h-[700px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Background image */}
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${images[currentIndex].url})` }}
            />

            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Text overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute top-1/2 -translate-y-1/2 left-0 right-0 p-6 md:p-8 text-white"
            >
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl md:text-2xl text-brand-colour-primary font-bold mb-2 leading-tight"
              >
                {images[currentIndex].headerTitle}
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={`text-2xl md:text-4xl font-bold mb-2 leading-tight  rounded-2xl `}
              >
                {images[currentIndex].title} <span className='text-brand-colour-primary'>Health needs</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-lg md:text-xl text-gray-200 mb-3 font-medium"
              >
                {images[currentIndex].subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-sm md:text-base text-gray-300 font-light max-w-2xl leading-relaxed"
              >
                {images[currentIndex].description}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  )
}

export default Carousel
