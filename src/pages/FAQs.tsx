import React from 'react'
import FaqsContent from '../components/FaqsContent';
import serviceFooterimg from '../assets/Group 16.png'


const FAQs = () => {
  return (
    <section className=" px-10">
      <h1 className=" text-center text-5xl font-semibold header-font">FAQs</h1>

      <main className=" py-10">
        <FaqsContent />
      </main>
   
    </section>
  )
}

export default FAQs
