import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Invoice Management System",
    github: "https://github.com/RahulSaroj9298/Full-Stack-Invoice-Management-Application",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 2,
    image: IMG2,
    title: "Covid Dashboard of India",
    github: "https://github.com/RahulSaroj9298/Covid-Dashboard-of-India",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 3,
    image: IMG3,
    title: "To Do App",
    github: "https://github.com/RahulSaroj9298/To-do-app-In-React",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 4,
    image: IMG4,
    title: "ChatBot App",
    github: "https://github.com/RahulSaroj9298/ChatBot-for-Fun",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 5,
    image: IMG5,
    title: "Online Quiz App",
    github: "https://github.com/RahulSaroj9298/Online-quiz-web-app",
    demo: "https://dribbble.com/Alien_pixels",
  },
  {
    id: 6,
    image: IMG6,
    title: "Movie Library App",
    github: "https://github.com/RahulSaroj9298/movie-library",
    demo: "https://dribbble.com/Alien_pixels",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return(
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>
              <div className="portfolio_itme-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })
        }
      </div>
    </section>
  );
};

export default portfolio;
