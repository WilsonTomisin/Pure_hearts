import contactimg from '../assets/bg.png'
import locationIcon from '../assets/Vector (1).png'
import mailIcon from '../assets/Group (1).png';
import phoneIcon from '../assets/Group (2).png';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <main>
      <div className="relative">
        <div className=" bg-black/30 w-full h-full absolute z-10" />
        <h1 className=" text-nowrap z-20 header-font text-4xl lg:text-6xl text-white font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 ">
          Contact Us
        </h1>
        <img src={contactimg} alt="contact image" className="  h-[400px] w-full" />
      </div>

      <section className=" max-w-[700px] mx-auto  bg-gray-100 p-7 rounded-xl my-10">
        <h1 className=" text-3xl mb-3 font-semibold">Get in touch!</h1>
        <p>
          get the right service, determine what you need contact us for the most suitable services.{' '}
        </p>
        <ContactForm/>
      </section>

      <section className=" my-5 lg:my-10 px-4 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-5 justify-center">
        <div>
          <img src={locationIcon} alt="" className=" mb-3 h-16 mx-auto" />
          <p className=' font-semibold'>Cromwell House Crusader Road, Lincoln, Lincolnshire, United Kingdom, LN67AS</p>
        </div>
        <div>
          <img src={mailIcon} alt="" className=" mb-3 h-16 mx-auto" />
          <div className=' flex flex-col gap-y-3 font-semibold '>
            <a href=" " className=' underline'>HR@pureheartssolutions.co.uk</a>
            <a href="" className=' underline'>admin@pureheartssolutions.co.uk</a>
          </div>
        </div>
        <div className=' text-center'>
          <img src={phoneIcon} alt="" className=" mb-3 h-16 mx-auto" />
          <p className=' font-semibold'>01522 452 772</p>
        </div>
      </section>

    </main>
  )
}

export default Contact
