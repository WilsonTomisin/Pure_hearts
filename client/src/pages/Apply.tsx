import React from 'react'
import ApplicationForm from '../components/ApplicationForm'

const Apply = () => {
  return (
    <main className=" px-4 lg:px-10">
      <header className=" text-center w-full md:w-[80%] my-5 mx-auto">
        <h1 className=" mb-5 text-brand-header text-3xl lg:text-5xl header-font font-bold">
          Application Form{' '}
        </h1>
        <p>
          <h3 className=" mb-3 text-brand-header text-lg lg:text-2xl header-font font-bold">
            You are just few steps away from becoming a part of a team that makes a difference in
            the car sector
          </h3>
          <span className=' text-sm'>
            We take pride with our rigorous and intensive recruitment process. This is your chance
            of becoming a part of a team that care for clients but are also staff centered{' '}
          </span>
        </p>
          </header>
        <ApplicationForm/>
    </main>
  )
}

export default Apply
