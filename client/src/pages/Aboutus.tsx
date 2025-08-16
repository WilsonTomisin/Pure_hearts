import card1 from '../assets/cardimg1.png';
import card2 from '../assets/cardimg2.png';
import card3 from '../assets/cardimg3.png';
import careImg from "../assets/TJQVMX3 (1).png";
import coreImg1 from "../assets/Frame 107 (1).png";
import coreImg2 from "../assets/Frame 107 (1).png";
import coreImg3 from "../assets/Frame 109.png";
import coreImg4 from "../assets/Frame 109 (1).png";
import serviceFooterimg from '../assets/Group 16.png'


const Aboutus = () => {
  return (
    <section className=" px-10">
      <main className=" grid grid-cols-1 gap-5">
        <div className=" p-7 bg-brand-colour-primary text-white rounded-2xl">
          <h2 className=" text-3xl font-bold mb-4 header-font text-center">ABOUT US</h2>
          <p className=" mb-3">
            Our focus is on delivering exceptional care within the familiar surroundings of our
            clients' homes. Whether through our domiciliary care services, where our professionals
            bring their expertise directly to clients within their residences, or by offering the
            comfort and support of live-in careers.
          </p>
          <p>
            Founded in 2022, Pure Hearts Solutions Limited emerged from a dedicated team of
            colleagues passionate about delivering top-notch care. With a shared commitment to
            excellence, our journey began with the vision of providing compassionate and dignified
            support to those in need. From our collaborative roots, we've grown into a trusted care
            provider, guided by integrity and a deep-seated commitment to enhancing lives. 
          </p>
        </div>
      </main>

      <div className=" py-10">
        <div className=" text-center">
          <h2 className=" text-4xl font-bold text-brand-header mb-2">
            {' '}
            Pure Hearts Solutions, Your Health Our Priority
          </h2>
          <p>
            Our focus is on delivering exceptional care within the familiar surroundings of our
            clients' homes. Whether through our domiciliary care services, where our professionals
            bring their expertise directly to clients within their residences, or by offering the
            comfort and support of live-in careers.
          </p>
        </div>

        <main className=" grid grid-cols-3 gap-4 py-10">
          <div className=" grid grid-cols-2 items-center gap-5 bg-brand-header/50 p-5 rounded-2xl text-white shadow-md shadow-brand-colour-primary">
            <div className="  bg-black/10 h-10 w-10 mx-auto rounded-full p-3">
              <img src={card3} alt="" />
            </div>
            <div className=" ">
              <h4 className=" text-xl mb-2">Mission</h4>
              <p>At Pure Hearts Solutions, our mission is to elevate healthcare standards.</p>
            </div>
          </div>
          <div className=" grid grid-cols-2 items-center gap-5 bg-brand-header p-5 rounded-2xl text-white shadow-md shadow-brand-colour-primary">
            <div className=" bg-black/10 h-10 w-10 mx-auto rounded-full p-3">
              <img src={card1} alt="" />
            </div>
            <div>
              <h4 className=" text-xl mb-2">Vision</h4>
              <p>A world where every home is a place of comfort, dignity, and well-being.</p>
            </div>
          </div>
          <div className=" grid grid-cols-2 items-center gap-5 bg-brand-header p-5 rounded-2xl text-white shadow-md shadow-brand-colour-primary">
            <div className=" bg-black/10 h-10 w-10 mx-auto rounded-full p-3">
              <img src={card2} alt="" />
            </div>
            <div>
              <h4 className=" text-xl mb-2">Values</h4>
              <p>Rooted in Quality, compassion, excellence, and flexibility.</p>
            </div>
          </div>
        </main>
      </div>

      <div className=" py-10 flex items-center justify-between">
        <p>
          Rooted in compassion, excellence, and flexibility, our approach is centred on delivering
          high-quality healthcare solutions. With a commitment to adaptability, innovation, and a
          client-centric focus, we strive to exceed expectations, ensuring a positive impact on both
          clients and healthcare professionals. 
        </p>
        <div>
          <img src={careImg} />
        </div>
      </div>

      <div className="my-4 text-center">
        <h1 className="  text-brand-colour-primary text-3xl font-semibold">Our Core Values </h1>
        <p className=" ">
          At pure hearts we pay attention to your needs and are guided by our core values
        </p>
      </div>

      <div className=" py-7 rounded-2xl my-7 bg-brand-colour-primary italic px-5 grid grid-cols-2 gap-5 items-center justify-between">
        <div className=" flex items-center gap-4">
          <img src={coreImg1} alt=" placeholder" />
          <div className=" text-white">
            <h4 className=" text-brand-header text-3xl font-semibold ">QUALITY</h4>
            <p>
              Quality health care support is crucial for ensuring effective patient care. This
              informs the service that we provide AT Pure heart solution.
            </p>
          </div>
        </div>

        <div className=" flex items-center gap-4 text-white">
          <img src={coreImg2} alt=" placeholder " />
          <div>
            <h4 className=" text-brand-header text-3xl font-semibold ">COMMITMENT</h4>
            <p>
              Commited to ensuring equitable access to medical care, prioritizing inclusivity and
              advaocating for policies that bridge healthcare gaps for all.
            </p>
          </div>
        </div>

        <div className=" flex items-center gap-4 text-white">
          <img src={coreImg3} alt=" placeholder" />
          <div>
            <h4 className=" text-brand-header text-3xl font-semibold ">PERFORMANCE</h4>
            <p>
              At Pure heart solution we lead commendable performance, consistently prioritizing
              patient care and utilizing innovative solutions to enhance healthcare accessibility.
            </p>
          </div>
        </div>

        <div className=" flex items-center gap-4 text-white">
          <img src={coreImg4} alt=" placeholder" />
          <div>
            <h4 className=" text-brand-header text-3xl font-semibold ">SAFETY</h4>
            <p>
              At Pure Heart solutions we focus on safety, implementing rigorous protocols and state
              of the art measures to ensure a secure environment for both patient and staff.
            </p>
          </div>
        </div>
      </div>

 
    </section>
  )
}

export default Aboutus
