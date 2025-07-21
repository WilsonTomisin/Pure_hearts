import serviceimg1 from '../assets/image.png';
import serviceFooterimg from '../assets/Group 16.png'


const Services = () => {
  return (
    <div className=" p-7">
      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <h3 className=" service-header">Domiciliary care </h3>
          <p className=" text-paragraph-text font-light">
            Pure Hearts Solutions offers personalised domiciliary care based on individual needs.
            Our dedicated professionals provide compassionate care in your home with flexible
            scheduling. Discover our convenient and comfortable services, including live-in carers
            for ongoing support.  Experience personalized care in the comfort of your home with our
            domiciliary care services. Our dedicated staff can visit your home, providing
            compassionate and professional care to meet your individual needs. Additionally, we
            support established domiciliary care providers with experienced and reliable staff. 
          </p>
        </div>
        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>
      </section>

      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>
        <div className="">
          <h3 className=" service-header">Live in care </h3>
          <p className=" text-paragraph-text font-light">
            Discover our specialized care services, where our dedicated professionals are carefully
            matched to ensure personalized care.
          </p>
        </div>
      </section>

      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <h3 className=" service-header"> Specialized Care </h3>
          <p className=" text-paragraph-text font-light">
             Discover our specialized care services, where our dedicated professionals are carefully
            matched to ensure personalized care. With specialized training in various areas, we
            provide expert solutions to meet diverse healthcare needs. 
          </p>
        </div>
        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>
      </section>

      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>

        <div className="">
          <h3 className=" service-header"> Tailored Care Staffing </h3>
          <p className=" text-paragraph-text font-light">
             Providing dynamic staffing solutions for residences and hospitals, our expert team
            ensures seamless care delivery. From personal care to housekeeping and specialized
            moving and handling, experience flexibility and excellence in every placement. 
          </p>
        </div>
      </section>

      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <h3 className=" service-header"> Health care staffing solution </h3>
          <p className=" text-paragraph-text font-light">
             Our comprehensive healthcare staffing solutions cover short-term and long-term
            placements for various healthcare providers. Whether you require staff for learning
            disabilities, mental health services, hospitals, or elderly care, we have a dedicated
            team ready to meet your staffing needs.
          </p>
        </div>

        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>
      </section>

      <section className=" grid grid-cols-2 gap-5 justify-between my-22">
        <div className="">
          <img src={serviceimg1} alt="image 1" />
        </div>
        <div className="">
          <h3 className=" service-header"> Specialized Care </h3>
          <p className=" text-paragraph-text font-light">
             Discover our specialized care services, where our dedicated professionals are carefully
            matched to ensure personalized care. With specialized training in various areas, we
            provide expert solutions to meet diverse healthcare needs. 
          </p>
        </div>
      </section>

      <h1 className=" text-center service-header my-7 text-4xl">How to access our Support</h1>

      <div className=" grid grid-cols-3 gap-5 items-center justify-between mb-7">
        <div className=" p-7 shadow-lg rounded-lg h-[250px]">
          <div className=" flex justify-center bg-brand-colour-primary p-5 rounded-full w-28 mx-auto">
            {' '}
            <span className=" text-white bg-black/20 p-2.5 text-xl rounded-full">1</span>
          </div>
          <p className=" text-center text-2xl font-semibold my-3">STEP 1</p>
          <span>contact one of our trained professionals </span>
        </div>
        <div className=" shadow-lg rounded-lg p-7 h-[250px]">
          <div className=" flex justify-center bg-brand-colour-primary p-5 rounded-full w-28 mx-auto">
            {' '}
            <span className=" text-white bg-black/20 p-2.5 text-xl rounded-full">2</span>
          </div>
          <p className=" text-2xl font-semibold my-3 text-center">STEP 2</p>
          <span>swift care assessment within 48 hours tailored to your needs</span>
        </div>
        <div className=" shadow-lg rounded-lg p-7 h-[250px]">
          <div className=" flex justify-center bg-brand-colour-primary p-5 rounded-full w-28 mx-auto">
            {' '}
            <span className="  text-white bg-black/20 p-2.5 text-xl rounded-full">3</span>
          </div>
          <p className=" text-center my-3 text-2xl font-semibold">STEP 3</p>
          <span> Your personalised care package</span>
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-5 items-center justify-between mb-7">
        <p>
          You are welcome to contact one of our trained professionals. You are our priority and we
          ain to respond as soon as possible.
        </p>
        <p>
          Following your initial inquiry, our team of experts will gather more information about
          your needs and conduct a free assessment within 48 hours to better understand the care you
          require.
        </p>
        <p>
          Considering all your needs and preferences, our experts will design a personalised care
          package. The staff assigned to your care will be carefully selected to ensure they meet
          your specific requirements.
        </p>
          </div>
          
          <div className=' my-10'>
              <img src={serviceFooterimg} alt=" serivces footer image" />
          </div>
    </div>
  )
}

export default Services
