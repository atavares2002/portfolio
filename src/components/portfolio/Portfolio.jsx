import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img-portfolio1.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='text-light'>Trabalhos recentes</h5>
      <h2 className="text-light">
        Portfolio
      </h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Be Exclusive Gym" title='Be Exclusive Gym' />
          </div>
          <h3>Titulo do item do portfolio</h3>
          <a href="https://hithub.com">Github</a>
          <a href="https//beexclusivegym.com.br" className='btn btn-primary' target='_blank'>Site</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio