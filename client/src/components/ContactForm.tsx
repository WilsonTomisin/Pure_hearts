import React, { useEffect, useState } from 'react'
import {Resend} from  "resend"
import ContactEmail from './ContactEmail'
const ContactForm = () => {
    const [contactInfo, setContactInfo] = useState({
        first_name: '',
        email: '',
        phone: '',
        message: '',
    });
  
  useEffect(() => {
    async function verifyProxy() {
      const response = await fetch('/api').then(res => res.json()).then(data => console.log('proxy connected', data))
      return response
    }
    verifyProxy()
  }, [])
    const [isSending, setisSending] = useState(false)
    
    async function sendContactMail(e:React.MouseEvent<HTMLButtonElement,MouseEvent>) {
        e.preventDefault();
        try {
            setisSending(true)
          const response = await fetch('/api/send/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactInfo),
          });
            // const data =await response.json()
          // const data = await response.json() 
            console.log(response)
            alert('mail sent!')
        } catch (error) {
            console.log(error)
            return error
        } finally {
            setisSending(false)
            setContactInfo({
                email: "",
                phone: "",
                message: "",
                first_name:""
            })
        }
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
          className=" w-full bg-white shadow-md p-5 rounded-xl"
        />
      </div>
      <div>
        {' '}
        <input
          type="email"
          name="email"
                  onChange={handleChange}
                  value={contactInfo.email}
          placeholder="enter email address"
          className=" w-full bg-white shadow-md p-5 rounded-xl"
        />
      </div>
      <div>
        {' '}
        <input
          type="phone"
          name="phone"
                  onChange={handleChange}
                  value={contactInfo.phone}
          placeholder="phone number"
          className=" w-full bg-white shadow-md p-5 rounded-xl"
        />
      </div>
      <div>
        {' '}
        <textarea
          name="message"
          onChange={handleChange}
          placeholder="enter message"
          value={contactInfo.message}
          className=" w-full bg-white shadow-md p-5 rounded-xl"
        ></textarea>
      </div>
      <div>
              <button onClick={sendContactMail} className=" p-5 rounded-ee-2xl bg-brand-colour-primary text-white">
                  { isSending ? 'sending mail...' :' send'}
        </button>
      </div>
    </form>
  )
}

export default ContactForm
