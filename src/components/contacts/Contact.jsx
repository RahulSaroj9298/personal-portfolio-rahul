import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { RiWhatsappLine } from 'react-icons/ri'

import  { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vfwkvae', 'template_0v1bzwl', form.current, 'kcP5DS-hAYKGELE0o')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>rahulkumar.rk2651@gmail.com</h5>
            <a href="mailto:rahulkumar.rk2651@gmail.com">Send a message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Rahul Saroj</h5>
            <a href="http://m.me/rahul.saroj.7330763" target="blank_">Send a message</a>
          </article>

          <article className="contact_option">
            <RiWhatsappLine className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 8917769229</h5>
            <a href="https://wa.me/+918917769229" target="blank_">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows ="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact