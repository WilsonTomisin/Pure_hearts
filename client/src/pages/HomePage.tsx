import { CopyPlus, History, MoveRight, Star, User } from 'lucide-react'
import image1 from '../assets/TJQVMX3 (2).png';
import image2 from '../assets/video.png'
import { servicesCardInfo } from '../utils/constants';
import teamMember1 from "../assets/WhatsApp Image 2025-07-22 at 13.56.03_c8d6587f.jpg"
import teamMember2 from "../assets/WhatsApp Image 2025-07-22 at 13.56.03_e4a3a4bf.jpg";
import teamMember3 from "../assets/WhatsApp Image 2025-07-22 at 13.56.04_26bcf26f.jpg";
import domicillarycare from "../assets/card-highlight (1).png";
import domicillarycare2 from "../assets/image (2).png";
import domicillarycare3 from "../assets/image (3).png";
import { FaStar } from 'react-icons/fa6'
import Carousel from '../components/Carousel';




const HomePage = () => {
  return (
    <div>
      <section className=" relative">
        <Carousel />
      </section>
      <section className=" bg-slate-200 py-7 px-10 grid grid-cols-3 gap-5">
        <div className=" flex items-center gap-2 shadow-md shadow-brand-colour-primary bg-brand-header/30 hover:bg-[#1A89D2] ease-in-out duration-500 transition-all p-4 rounded-2xl">
          <span className=" p-1 bg-brand-colour-primary/30  rounded-full">
            {' '}
            <User size={40} className="text-brand-colour-primary  " />{' '}
          </span>
          <div>
            <h2 className=" font-semibold">Mission</h2>
            <p>At Pure Hearts Solutions, our mission is to elevate healthcare standards.</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 shadow-md shadow-brand-colour-primary bg-brand-header/30 hover:bg-[#1A89D2] ease-in-out duration-500 transition-all p-4 rounded-2xl">
          <span className=" p-1 bg-brand-colour-primary/30  rounded-full">
            {' '}
            <CopyPlus size={40} className="text-brand-colour-primary  " />
          </span>
          <div>
            <h2 className=" font-semibold">Vision</h2>
            <p>A world where every home is a place of comfort, dignity, and well-being.</p>
          </div>
        </div>
        <div className=" flex items-center gap-2 shadow-md shadow-brand-colour-primary bg-brand-header/30 hover:bg-[#1A89D2] ease-in-out duration-500 transition-all p-4 rounded-2xl">
          <span className=" p-1 bg-brand-colour-primary/30  rounded-full">
            <History size={40} className="text-brand-colour-primary  " />
          </span>
          <div>
            <h2 className=" font-semibold">Values</h2>
            <p>Rooted in quality, compassion, excellence, and flexibility.</p>
          </div>
        </div>
      </section>
      <section className=" grid grid-cols-2 items-center justify-between gap-10 px-10 py-7">
        <div className=" flex items-center gap-5 w-1/2">
          <img src={image1} alt="" className=" w-fit" />
          <img src={image2} alt="" />
        </div>
        <div className="">
          <p className=" text-2xl font-medium text-brand-colour-primary">ABOUT US</p>
          <h2 className="text-4xl font-semibold mb-4">
            {' '}
            Pure Heart Solutions, Your Health Our Priority
          </h2>
          <p>
            Our focus is on delivering exceptional care within the familiar surroundings of our
            clients' homes. Whether through our domiciliary care services, where our professionals
            bring their expertise directly to clients within their residences, or by offering the
            comfort and support of live-in careers.
          </p>
          <div className=" grid grid-cols-2 gap-4">
            <div className="  p-4">
              <div className=" w-fit p-1 bg-brand-colour-primary/30  rounded-full">
                {' '}
                <User size={40} className="text-brand-colour-primary  " /> 
              </div>
              <div>
                <h2 className=" font-semibold">Mission</h2>
                <p>At Pure Hearts Solutions, our mission is to elevate healthcare standards.</p>
              </div>
            </div>
            <div className="  p-4">
              <div className=" w-fit p-1 bg-brand-colour-primary/30  rounded-full">{' '}
              <CopyPlus size={40} className="text-brand-colour-primary  " />
              </div>
              <div>
                <h2 className=" font-semibold">Vision</h2>
                <p>A world where every home is a place of comfort, dignity, and well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-7 px-10 space-y-14">
        <main className=" text-center  w-[80%] mx-auto">
          <p className=" text-brand-header text-2xl font-semibold">WHY CHOOSE US</p>
          <h1 className=" text-4xl font-semibold">As a team we care about your welbeing</h1>
          <p className=" text-sm font-light leading-6">
            {' '}
            At pure heart solution we provide the best care services and are committed to delivering
            high-quality home care. This makes us a preferred choice. Pure heart solutions takes
            recruiting and training seriously. We are committed to recruiting staff with highly
            skilled carers who embody their values of compassion, respect, and professionalism. Our
            recruitment process is important to us. It is process that comprehensive training
            programs ensure that our caregivers are equipped with the necessary skills and knowledge
            to provide exceptional care.
          </p>
        </main>
        <section className="  grid grid-cols-2">
          <div className=" bg-[#1A89D2] rounded-tl-2xl flex items-center gap-5 justify-between p-8">
            <span className=" font-bold text-xl text-white">01</span>
            <div>
              <h4 className=" font-semibold text-lg">Quality</h4>
              <p>
                We’re more than a service - we are invested in the wel-being of your home and
                community
              </p>
            </div>
          </div>
          <div className=" bg-slate-200 rounded-tr-2xl flex items-center gap-5 justify-between p-8">
            <span className=" text-xl font-bold text-white p-3 rounded-full bg-brand-colour-primary">
              02
            </span>
            <div>
              <h4 className=" font-semibold text-lg">Excellence</h4>
              <p>
                Our team brings experience, professionalism, and a deep commitment to quality
                service.
              </p>
            </div>
          </div>
          <div className=" bg-slate-200 rounded-bl-2xl flex items-center gap-5 justify-between p-8">
            <span className=" text-white font-bold text-xl p-3 rounded-full bg-brand-colour-primary">
              03
            </span>
            <div>
              <h4 className=" font-semibold text-lg">Compassion</h4>
              <p>We lead with compassion, putting people first in every solution we provide </p>
            </div>
          </div>
          <div className=" bg-[#1A89D2] rounded-br-2xl flex items-center gap-5 justify-between p-8">
            <span className=" text-white text-xl font-bold">04</span>
            <div>
              <h4 className=" font-semibold text-lg">Safety</h4>
              <p>
                We blend modern solutions with a personal touch to meet evolving needs in healthcare
                and comply ti all the safety requirements for a wholesome support service.
              </p>
            </div>
          </div>
        </section>
      </section>

      <section className=" px-10 py-7 space-y-5  ">
        <main className=" text-center  w-[80%] mx-auto">
          <p className=" text-brand-header text-2xl font-semibold"> Our Services</p>
          <h1 className=" text-4xl font-semibold">Comprehensive Healthcare Solutions</h1>
          <p className=" text-sm font-light leading-6">
            At pure heart solution we are here to provide all your healthcare needs{' '}
          </p>
        </main>
        <div className=" grid grid-cols-3 gap-5 ">
          {servicesCardInfo.map((service, idx) => {
            if (idx === servicesCardInfo.length - 1) {
              return (
                <>
                  <div
                    className="  p-7 bg-brand-header rounded-2xl hover:bg-[#1A89D2] hover:text-white transition-all ease-in-out duration-700 "
                    key={idx}
                  >
                    <p className=" w-fit rounded-full p-5 text-xl font-bold bg-brand-colour-primary/20 text-brand-colour-primary">
                      {service.icon}
                    </p>
                    <h4 className=" text-xl my-4 font-semibold">{service.name}</h4>
                    <p>{service.info}</p>
                  </div>

                  <div className=" bg-gradient-to-br from-[#1A89D2] to-card-foreground text-center text-white flex flex-col gap-y-5 items-center justify-center  rounded-2xl p-7">
                    <p className=" text-xl font-semibold">Emergency Call</p>
                    <p>We are always happy to provide support and assistance to everyone. </p>
                    <button className=" px-4 py-2 rounded-3xl border border-brand-colour-primary font-semibold">
                      contact us
                    </button>
                  </div>
                </>
              )
            }
            return (
              <div
                className=" bg-brand-header p-7 rounded-2xl hover:bg-[#1A89D2] hover:text-white transition-all ease-in-out duration-700 "
                key={idx}
              >
                <p className=" w-fit rounded-full p-5 text-xl font-bold  bg-brand-colour-primary/20 text-brand-colour-primary">
                  {service.icon}
                </p>
                <h4 className=" text-xl my-4 font-semibold">{service.name}</h4>
                <p>{service.info}</p>
              </div>
            )
          })}
        </div>
        <p className=" my-5">
          <span className=" flex items-center justify-center gap-2 text-brand-colour-primary text-lg">
            Learn More <MoveRight />
          </span>
        </p>
      </section>

      <section className=" px-10 py-7 space-y-5">
        <main className=" text-center  w-[80%] mx-auto">
          <p className=" text-brand-header text-2xl font-semibold"> Our Team</p>
          <h1 className=" text-4xl font-semibold">Meet Our Team Members</h1>
          <p className=" text-sm font-light leading-6">
            We have a dynamic and a highly skilled management team{' '}
          </p>
        </main>

        <section className=" grid grid-cols-3 items-center justify-between">
          <div>
            <img
              src={teamMember1}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt=" team member 1"
            />
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">John Smith</h4>
              <p>lorem</p>
            </div>
          </div>
          <div>
            <img
              src={teamMember2}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt=" team member 2"
            />{' '}
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">John Smith</h4>
              <p>lorem</p>
            </div>
          </div>
          <div>
            <img
              src={teamMember3}
              className=" rounded-2xl mx-auto h-[300px] w-[250px] transition-all ease-in-out duration-500 hover:shadow-lg hover:shadow-brand-header"
              alt="team member 3"
            />{' '}
            <div className=" text-center mt-2">
              <h4 className=" text-xl text-brand-colour-primary font-semibold">John Smith</h4>
              <p>lorem</p>
            </div>
          </div>
        </section>
      </section>

      <section className=" px-10 py-7 space-y-5">
        <main className=" text-center  w-[60%] mx-auto">
          <p className=" text-brand-header text-2xl font-semibold">CAREERS</p>
          <h1 className=" text-4xl font-semibold">Become a member of our dynamic team</h1>
          <p className=" text-sm font-light leading-6">
            We welcome everyone who is compassionate and is willing to be a part of a team that
            makes a difference in healthcare.{' '}
          </p>
        </main>

        <section className=" grid grid-cols-2 items-center justify-between">
          <div>
            <img src={domicillarycare} className="  " alt=" " />
          </div>
          <div className=" space-y-20">
            <div>
              <img src={domicillarycare2} className=" h-[120px] w-full" alt="" />
              <h4>Senior Support worker</h4>
              <p>Providing professional support for both staff and client</p>
            </div>
            <div>
              <img src={domicillarycare3} className=" h-[120px] w-full" alt="" />
              <h4>PBS Partner</h4>
              <p>Providing spacialised training and monitoring for support workers </p>
            </div>
          </div>
        </section>
      </section>

      <section className=" px-10 py-7 bg-[#1A89D2] space-y-5">
        <h1 className=" text-4xl text-center font-semibold text-white header-font ">
          Customer Reviews
        </h1>

        <section className=" grid grid-cols-3 gap-5 justify-between">
          <div className=" h-[450px] flex flex-col justify-between bg-gradient-to-bl from-white via-brand-colour-primary to-accent-foreground p-7 rounded-2xl">
            <p className=" text-[#1A89D2] font-bold">
              The service I received was thoroughly impressive. The staff was friendly and
              attentive, making me feel valued. The providers took the time to address all my
              concerns. I highly recommend pure heart solution for anyone looking for top-notch
              healthcare!
            </p>
            <span className=" flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <FaStar key={idx} className=" text-yellow-400" />
              ))}
            </span>{' '}
          </div>
          <div className=" h-[450px]  flex flex-col justify-between bg-gradient-to-bl from-white via-brand-colour-primary to-accent-foreground p-7 rounded-2xl">
            <p className=" text-[#1A89D2] font-bold">
              Pure Hearts Solutions has been a game-changer for our care facility. The caregivers
              they provide not only excel in professionalism and skills but also bring genuine
              warmth to their roles. Their commitment to person-centered care aligns seamlessly with
              our values, creating a positive and enriching environment for our residents. We are
              grateful for their outstanding service and the positive impact they've had on our
              facility.
            </p>
            <span className=" flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <FaStar key={idx} className=" text-yellow-400" />
              ))}
            </span>{' '}
          </div>
          <div className=" h-[450px]  flex flex-col justify-between bg-gradient-to-bl from-white via-brand-colour-primary to-accent-foreground p-7 rounded-2xl">
            <p className=" text-[#1A89D2] font-bold">
              I am so impressed by their professionalism . Communication was so prompt and I was
              attended to with ease. I will definitely recommend their service
            </p>
            <span className=" flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <FaStar key={idx} className=" text-yellow-400" />
              ))}
            </span>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HomePage
