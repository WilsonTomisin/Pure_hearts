import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useWindowSize from '../hooks/useWindowSize';
import teamMember3 from '../assets/WhatsApp Image 2025-07-22 at 13.56.03_c8d6587f.jpg'
import teamMember2 from '../assets/WhatsApp Image 2025-07-22 at 13.56.03_e4a3a4bf.jpg'
import teamMember1 from '../assets/WhatsApp Image 2025-07-22 at 13.56.04_26bcf26f.jpg'

const AboutTeam = () => {
  const [direction, setDirection] = useState<number>(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const { isTabletandMobile } = useWindowSize()

  const boardDetails = [
    {
      id: 1,
      name: 'Michael Adodo. ',
      role: 'Chief Executive Officer. CEO',
      image: teamMember1,
      description:
        'Dedicated healthcare professional with 15+ years of experience leading innovative healthcare solutions.',
    },
    {
      id: 2,
      name: 'Johnson Ajuwon.',
      role: 'Chief Financial Officer  CFO',
      image: teamMember2,
      description:
        'Experienced nurse practitioner committed to providing exceptional patient care and team leadership.',
    },
    {
      id: 3,
      name: 'Abubakri Otegbeye.  ',
      role: 'Registered Manager ',
      image: teamMember3,
      description:
        'Strategic operations leader focused on optimizing healthcare delivery and organizational efficiency.',
    },
  ]

  const slideVariants = {
    enter: (direction:number) => ({
      y: 0,
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      // zIndex: 1,
      // y: 0,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction:number) => ({
      // zIndex: 0,
      // y: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlay])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex(prev => (prev + 1) % boardDetails.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex(prev => (prev - 1 + boardDetails.length) % boardDetails.length)
  }

  return (
    <>
      {isTabletandMobile ? (
        <section className=" overflow-x-hidden w-auto  h-[220px]">
          <main className=" relative top-1/2   ">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  delay: 0.5,
                  x: { type: 'keyframes', stiffness: 0, damping: 0 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.4 },
                  duration: 7,
                }}
                className=" inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center w-full md:w-1/2 mx-auto  ">
                  <img
                    className=" mx-auto h-32 w-32 lg:h-52 lg:w-52 rounded-full"
                    src={boardDetails[currentIndex].image}
                    alt={boardDetails[currentIndex].name}
                  />
                  <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className=" text-lg text-center my-3 font-bold"
                  >
                    {boardDetails[currentIndex].name}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className=" text-xs leading-5 text-center font-light"
                  >
                    {boardDetails[currentIndex].role}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevSlide}
              className="absolute left-0 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-black backdrop-blur-sm p-3 rounded-full text-white hover:text-black hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-black backdrop-blur-sm p-3 rounded-full text-white hover:text-black hover:bg-white/30 transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight size={24} />
            </button>
          </main>
        </section>
      ) : (
        <section className=" grid grid-cols-3 items-center justify-between">
          <div>
            <img
              src={teamMember1}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt=" team member 1"
            />
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">Michael Adodo.</h4>
              <p>Chief Executive Officer. CEO</p>
            </div>
          </div>
          <div>
            <img
              src={teamMember2}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt=" team member 2"
            />{' '}
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">Johnson Ajuwon</h4>
              <p>Chief Financial Officer CFO</p>
            </div>
          </div>
          <div>
            <img
              src={teamMember3}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt="team member 3"
            />{' '}
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">
                Abubakri Otegbeye
              </h4>
              <p>Registered Manager</p>
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default AboutTeam
