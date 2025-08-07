import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'


const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({
        first_name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSending, setisSending] = useState(false)
    const [errors, setErrors] = useState<Partial<typeof contactInfo>>({})
  
  useEffect(() => {
    async function verifyProxy() {
      const response = await fetch('/api').then(res => res.json()).then(data => console.log('proxy connected', data))
      return response
    }
    verifyProxy()
  }, [])
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  async function sendContactMail() {
    try {
      setisSending(true)
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICEID_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_KEY,
        {
          from_name: contactInfo.first_name,
          from_email: contactInfo.email,
          message: contactInfo.message,
          to_email: 'recipient@example.com',
        },
      )
      console.log(response)
      alert('mail sent!')
    } catch (error) {
      console.log(error)
      return error
    } finally {
      setisSending(false)
      setContactInfo({
        email: '',
        phone: '',
        message: '',
        first_name: '',
      })
    }
  }
  const validateForm = ():boolean => {
    const formerrors: Partial<typeof contactInfo> = {}
    
    if (!contactInfo.first_name) {
      formerrors.first_name = 'Enter your name'
    }
    if (!contactInfo.email) {
      formerrors.email = 'Enter your email address'
    }else if ( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contactInfo.email)) {
      formerrors.email = 'Invalid email address'
    }

    if (!contactInfo.phone) {
      formerrors.phone = 'Enter phone number'
    }else if (!/^\+(\d{1,3})[- ]?\d{4,14}$/.test(contactInfo.phone)) {
      formerrors.phone = 'Enter phone number with country code e.g +1234567890'
    }

    if (!contactInfo.message) {
      formerrors.message = 'Enter a brief description of why you are reaching out'
    }
    setErrors(formerrors)
    return Object.entries(formerrors).length === 0
  }

  function handleSend(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (validateForm()) {
      sendContactMail();
    }
    return null
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    e.preventDefault()
    const { name, value } = e.currentTarget
    setContactInfo(prev => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <form className=" py-7 flex flex-col gap-y-5">
      <div>
        <input
          type="text"
          name="first_name"
          placeholder="enter first name"
          onChange={handleChange}
          value={contactInfo.first_name}
          className={` ${errors.first_name ? ' border border-red-500' : ''} w-full bg-white shadow-md p-5 rounded-xl`}
        />
        {errors?.first_name && (
          <span className=" text-xs text-red-500 font-light">{errors.first_name}</span>
        )}
      </div>
      <div>
        {' '}
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={contactInfo.email}
          placeholder="enter email address"
          className={` ${errors.email ? ' border border-red-500' : ''} w-full bg-white shadow-md p-5 rounded-xl`}
        />
        {errors?.email && <span className=" text-xs text-red-500 font-light">{errors.email}</span>}
      </div>
      <div>
        {' '}
        <input
          type="phone"
          name="phone"
          onChange={handleChange}
          value={contactInfo.phone}
          placeholder="phone number"
          className={` ${errors.phone ? ' border border-red-500' : ''} w-full bg-white shadow-md p-5 rounded-xl`}
        />
        {errors?.phone && <span className=" text-xs text-red-500 font-light">{errors.phone}</span>}
      </div>
      <div>
        {' '}
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="enter message"
          value={contactInfo.message}
          className={` ${errors.message ? ' border border-red-500' : ''} w-full bg-white shadow-md p-5 rounded-xl`}
        ></textarea>
        {errors?.message && <span className=" text-xs text-red-500 font-light">{errors.message}</span>}
      </div>
      <div>
        <button
          onClick={handleSend}
          className=" p-5 rounded-ee-2xl bg-brand-colour-primary text-white"
        >
          {isSending ? 'sending mail...' : ' send'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
