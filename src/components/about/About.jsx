import React from 'react'
import './about.css'
import Andre from '../../assets/andre-tavares-about.webp'
import {GiNinjaHead} from 'react-icons/gi'
import {GoOrganization} from 'react-icons/go'
import {RiTeamFill} from 'react-icons/ri'


const About = () => {
  return (
    <section id='about'>
      <h5 className='text-light'>Sobre minha atuação em projetos de</h5>
      <h2 className='text-light'>Tecnologia, design, marketing e educação</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Andre} alt="André Tavares por Nathalia Millen" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <GiNinjaHead className='about__icon'/>
                <h5>Experiência</h5>
                <small>+20 anos de atuação</small>
              </article>
              <article className="about__card">
                <GoOrganization className='about__icon'/>
                <h5>Clientes</h5>
                <small>Apoio e consultoria</small>
              </article>
              <article className="about__card">
                <RiTeamFill className='about__icon'/>
                <h5>Projetos</h5>
                <small>Parcerias e Equipes</small>
              </article>
            </div>
            <p>
            Mais de 20 anos dedicados a projetos nas áreas de educação, tecnologia e desenvolvimento profissional. 
            Tive o privilégio de compor e liderar equipes em projetos de integração de sistemas, desenvolvimento de aplicações, inovação e gestão do conhecimento. 
            Total dedicação aos clientes e projetos, compartilhando conhecimentos nas modalidades presencial e a distância. 
            Atualmente, desenvolvo, customizo e otimizo sites com foco em front-end, UX design, SEO e outras estratégias do marketing digital.
            </p>
            <a href="#contact" className="btn btn-primary">Saiba mais.</a>
          </div>
        </div>
    </section>
  )
}

export default About
