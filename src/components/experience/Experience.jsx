import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 className='text-light'>Principais habilidades</h5>
      <h2 className="text-light">
        Experiência em projetos
      </h2>
      <div className="container experience__container">
        <div className="experience__title-ti">
          <h3>Front-end Dev.</h3>
          <div className="experience__content">
            <article className="experience__details" title='Web Semântica, XML, Web Standards'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>HTML5</h5>
              </div>
              <progress value="90" max="100">90%</progress> 
            </article>
            <article className="experience__details" title='Bootstrap, Tailwind, SASS, Foundation, Frameworks e Metodologias'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>CSS</h5>
              </div>
            <progress value="60" max="100"></progress> 
            </article>
            <article className="experience__details" title='DOM, APIs, JSON'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>JavaScript</h5>
              </div>
            <progress value="30" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>React</h5>
              </div>
            <progress value="35" max="100"></progress> 
            </article>
            <article className="experience__details" title='Woocommerce, LMS, Customizações, Elementor, Temas e Plugins'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>WordPress</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
            <article className="experience__details" title='Wordpress, Moodle, Blackboard, Talent LMS, LearnDash'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>CMS e LMS</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Python</h5>
              </div>
            <progress value="20" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>PHP e MySQL</h5>
              </div>
            <progress value="35" max="100"></progress> 
            </article>
            
            
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Marketing</h3>
          <div className="experience__content">
          <article className="experience__details" title=''>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Planejamento</h5>
              </div>
              <progress value="90" max="100">90%</progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Tráfego (CPC)</h5>
              </div>
            <progress value="60" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5 title='Vanilla, ES5, ES6, Jquery'>Funis</h5>
              </div>
            <progress value="50" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Lançamentos</h5>
              </div>
            <progress value="50" max="100"></progress> 
            </article>
                        
            <article className="experience__details" title='SEO técnico, local, otimizações'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>SEO</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Analytics</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
          </div>
        </div>
        <div className="experience__mkt-edu">
          <h3>Design e Eduação</h3>
          <div className="experience__content">
          <article className="experience__details" title='Edição e tratamento'>
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Áudio e Vídeo</h5>
              </div>
            <progress value="70" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>UX | UI Design</h5>
              </div>
            <progress value="80" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>D. Instrucional</h5>
              </div>
              <progress value="95" max="100"></progress> 
            </article>
            
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>D. Produtos</h5>
              </div>
              <progress value="60" max="100"></progress> 
            </article>
            <article className="experience__details">
              <div>
                <BsFillCheckCircleFill className='experience__details-icon' />
                <h5>Storytelling</h5>
              </div>
              <progress value="30" max="100"></progress> 
            </article>
            
          </div>
        </div>
      </div>  
    </section>
  )
}

export default Experience