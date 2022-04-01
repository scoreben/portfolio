import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
   const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_dmv7zq9', 'template_eizufmg', form.current, 'z6TqTtltBIqTAYSq3')
   event.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Omarshebl2016@gmail.com</h5>
            <a href='mailto:Omarshebl2016@gmail.com'>Send A Message </a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine    className='contact_option-icon' />
            <h4>Messanger</h4>
            <h5>OmarTutorials</h5>
            <a href='https://m.me/ernest.achiever'>Send A Message </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp   className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+2001272570231</h5>
            <a href='https://api.whatsapp.com/send?phone++2001272570231'>Send A Message </a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
            <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
  )
}

export default Contact