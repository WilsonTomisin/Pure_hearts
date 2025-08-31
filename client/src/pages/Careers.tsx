import React from 'react';
import img from '../assets/card-highlight (1).png';
import img2 from '../assets/image (1).png';
import img3 from '../assets/Group 604.png';
import { useNavigate } from 'react-router-dom';

const Careers = () => {
    const navigate = useNavigate()
  return (
    <div className=" px-4 lg:px-10">
      <header className=" text-center w-full md:w-3/4 my-5 mx-auto">
        <h1 className=" text-brand-header text-2xl lg:text-5xl header-font font-bold">
          Become a member of our dynamic team
        </h1>
        <p>
          We take pride with our rigorous and intensive recruitment process. This is your chance of
          becoming a part of a team that care for clients but are also staff centered{' '}
        </p>
      </header>

      <section className=" flex flex-col-reverse md:flex-row items-center justify-between">
        <img src={img} alt=" caring for someone" className=" h-[600px] w-[600px]" />
        <div>
          <p>
            Carers are required to visit client homes, providing compassionate and professional care
            to meet their individual needs. Special training and certicication will be provided{' '}
          </p>
          <button
            onClick={() => navigate('/apply')}
            className=" mt-5 text-white px-8 py-2 rounded-3xl bg-brand-colour-primary"
          >
            apply
          </button>
        </div>
      </section>

      <section className=" flex flex-col md:flex-row items-center justify-between">
        <div>
          <p>
            we are committed to raising the standard of care and support within the disability and
            social services sector through the delivery of expert-led, person-centred training and
            continuous workforce development.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className=" mt-5 text-white px-8 py-2 rounded-3xl bg-brand-colour-primary"
          >
            apply
          </button>
        </div>
        <img src={img2} alt=" caring for someone" className=" h-[600px] w-[600px]" />
      </section>

      <section className=" flex flex-col-reverse md:flex-row items-center justify-between">
        <img src={img3} alt=" caring for someone" className=" h-[600px] w-[600px]" />
        <div>
          {' '}
          <p>
            We provide specialised training programs tailored specifically for support workers,
            focusing on Positive Behaviour Support (PBS), trauma-informed care, communication
            strategies, and best practices in supporting individuals with complex needs.
          </p>
          <button
            onClick={() => navigate('/apply')}
            className=" mt-5 text-white px-8 py-2 rounded-3xl bg-brand-colour-primary"
          >
            apply
          </button>
        </div>
      </section>
    </div>
  )
}

export default Careers
