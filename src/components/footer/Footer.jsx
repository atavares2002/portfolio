import React from 'react'
import './footer.css'
import SocialIcons from '../socialicons/SocialIcons'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ATAVARES</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiência</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
        <SocialIcons position='footer__socialicons' />
        <div className="footer__copyright">
          <small>&copy; {new Date().getFullYear()} ATAVARES. Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer