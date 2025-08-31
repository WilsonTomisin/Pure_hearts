import React from 'react'
import logo from '../assets/Logo.png'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import footerimg from '../assets/Group 16.png'


const Footer = () => {
    return (
      <section>
        <div className=' my-7'>
          <img src={footerimg} alt=" footer image" />
        </div>
        <footer className=" bg-[#1A89D2] p-10">
          <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10">
            <img src={logo} alt="pure hearts logo" className=" h-20 w-48" />
            <h4 className=" text-brand-colour-primary text-xl ">OPENING HOURS</h4>
            <h4 className=" text-brand-colour-primary text-xl ">ADDRESS</h4>
            <h4 className=" text-brand-colour-primary text-xl ">CONTACT US</h4>
          </main>
          <main className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-10">
            {' '}
            <div>
              <p className=" text-white">
                Our focus is on delivering exceptional care within the familiar surroundings of our
                clients' homes. Whether through our domiciliary care services, where our
                professionals bring their expertise directly to clients within their residences, or
                by offering the comfort and support of live-in careers.
              </p>
            </div>
            <div>
              <ul className=" text-white">
                <li>Mon 09:00 – 17:00</li>
                <li>Tue 09:00 – 17:00</li>
                <li>Wed 09:00 – 17:00</li>
                <li>Thu 09:00 – 17:00</li>
                <li>Fri 09:00 – 17:00</li>
                <li>Sat 09:00 – 17:00</li>
                <li>Sun by appointment</li>
              </ul>
            </div>
            <div>
              <p className=" text-white">
                Cromwell House Crusader Road, Lincoln, Lincolnshire, United Kingdom, LN67AS
              </p>
            </div>
            <div>
              <ul className=" text-white">
                <li>HR@pureheartssolutions.co.uk</li>
                <li>01522 452 772</li>
              </ul>
            </div>
          </main>
          <div className=" py-7 flex items-center justify-between text-white">
            <div className=" flex items-center space-x-3">
              <a href="#">
                <FaLinkedin size={30} />
              </a>
              <a href="#">
                {' '}
                <FaFacebookSquare size={30} />{' '}
              </a>
              <a href="#">
                {' '}
                <FaInstagram size={30} />
              </a>
              <a href="#">
                {' '}
                <FaXTwitter size={30} />
              </a>
            </div>
            <div>2025 © Care Link. All Rights Reserved.</div>
          </div>
        </footer>
      </section>
    )
}

export default Footer
