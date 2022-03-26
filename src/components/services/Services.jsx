import React from 'react'
import './services.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5 className="text-light">
        Como posso ajudar
      </h5>
      <h2 className="text-light">
        Serviços
      </h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI | UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Sites Institucionais, Pessoais ou Blog
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                E-commerce
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Landing pages
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Site Redesign
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Design Instrucional (cursos online)
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Aplicativos e Infoprodutos
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Design Kit e Identidade Visual
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Desenvolvimento Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Desenvolvimento e Hospedagem
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Wordpres, React, Gatsby
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                E-mail Corporativo
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Migrações (sem perda de ranking)
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Automações, Otimizações e Performance
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Customizações e Integrações
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Cursos Online e Infoprodutos
              </p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Marketing e Planejamento</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                SEO -  Tráfego Orgânico
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                PPC - Tráfego Pago
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Planejamento de Funil Digital
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Mail Marketing
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Lançamentos
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Análise da Concorrência
              </p>
            </li>
            <li>
              <BsFillCheckCircleFill className='service__list-icon' />
              <p>
                Analytics
              </p>
            </li>
          </ul>
        </article>
      </div>
      <div>
      {/* <a href="https://cloudez.io/br?utm_campaign=partner-atavares-seoxperts-badge&autm_medium=badge&utm_source=partner&utm_content=partner&utm_term=">
        <img alt="" width="220" height="60" src="https://files.cloudez.io/stamp/partner-sm.svg">
      </a> */}
      </div>
    </section>
  )
}

export default Services