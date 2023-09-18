import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img-portfolio1.png";
import IMG2 from "../../assets/img-portfolio2.png";
import IMG3 from "../../assets/img-portfolio3.png";
import IMG4 from "../../assets/img-portfolio4.png";
import IMG5 from "../../assets/img-portfolio5.png";
import IMG6 from "../../assets/img-portfolio6.png";
import IMG7 from "../../assets/img-portfolio7.png";
import IMG8 from "../../assets/img-portfolio8.png";
import IMG9 from "../../assets/img-portfolio9.png";

// Data Array para preenhcer o portfolio
const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Be Exclusive Gym - Wordpress Design e SEO",
    github: "https://github.com/atavares2002/",
    demo: "https://beexclusivegym.com.br",
  },
  {
    id: 2,
    image: IMG2,
    title: "Embeleze Gama - Site & Identidade Visual",
    github: "https://github.com/atavares2002/",
    demo: "https://embelezegama.com.br",
  },
  {
    id: 3,
    image: IMG3,
    title: "SEOxperts - Site & Identidade Visual ",
    github: "https://github.com/atavares2002/",
    demo: "https://seoxperts.com.br",
  },
  {
    id: 4,
    image: IMG4,
    title: "instituto Modal - Wordpress Design e SEO",
    github: "https://github.com/atavares2002/",
    demo: "https://modal.org.br",
  },
  {
    id: 5,
    image: IMG5,
    title: "Mansão Cristal - Wordpress UI Design",
    github: "https://github.com/atavares2002/",
    demo: "https://mansaocristal.com.br",
  },
  {
    id: 6,
    image: IMG6,
    title: "Microtecnica - Wordpress UI Design e SEO",
    github: "https://github.com/atavares2002/",
    demo: "https://microtecnica.com.br",
  },
  {
    id: 7,
    image: IMG7,
    title: "MTEC - Wordpress UX | Design e SEO",
    github: "https://github.com/atavares2002/",
    demo: "https://mtec.com.vc",
  },
  {
    id: 8,
    image: IMG8,
    title: "Moreira & Castro Advogados - Next.JS UX|UI Design",
    github: "https://github.com/atavares2002/moreiracastro",
    demo: "https://moreiracastro.adv.br",
  },
  {
    id: 9,
    image: IMG9,
    title: "BLOG Moreira & Castro - Next.JS UX|UI Design",
    github: "https://github.com/atavares2002/moreiracastro_blog",
    demo: "https://blog.moreiracastro.adv.br",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">Trabalhos recentes</h5>
      <h2 className="text-light">Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} className="image" alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Site
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
