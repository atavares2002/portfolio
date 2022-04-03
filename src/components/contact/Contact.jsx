import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k21tg8s', 'template_8aq38hi', form.current, '5SzJoWUkRHKf1tpY1')
    setMsg("Mensagem Enviada! Obrigado.")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5 className='text-light'>Me fale sobre seus projetos ou deixe um comentário!</h5>
      <h2 className='text-light'>Contato</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>atavares@seoxperts.com.br</h5>
            <a href="mailto:atavares@seoxperts.com.br" >Mensagem</a>
          </article>
          <article className="contact__option">
            <FaHatWizard className="contact__option-icon"/>
            <h4>Site</h4>
            <h5>SEOxperts</h5>
            <a href="https://seoxperts.com.br" target="_blank" rel="noopener noreferrer">seoxperts.com.br</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+55 61 98200 0333</h5>
            <a href="https://wa.me/message/HHVKC53QFOWZI1" target="_blank" rel="noopener noreferrer">Mensagem</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu e-mail" required />
            <textarea name="message" rows="7" required placeholder="Mensagem de texto"></textarea>
            <button type="submit" className="btn btn-primary">Enviar</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact