import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

      
      const data = [
      {
        id: 1,
          image: Img1,
          title: 'Orion UI kit - Charts templates & infographics in Figma',
          gihub: 'https://github.com',
         demo:'https://cdn.dribbble.com/users/1187002/screenshots/17774116/media/ebfd204223b58df7b3853f2ceb3fe44c.jpg'
        },
        {
          id: 2,
          image: Img2,
          title: 'Eclipse - Figma dashboard UI kit for data design web apps',
          gihub: 'https://github.com',
           demo:'https://cdn.dribbble.com/users/1187002/screenshots/17845658/media/48d1ef79719bb03a3a2f04ec8dab4345.jpg?compress=1&resize=1200x900&vertical=top'
        },
        {
          id: 3,
          image: Img3,
          title: 'Orion UI kit - Charts templates & infographics in Figma',
          gihub: 'https://github.com',
          demo:'https://dribbble.com/shots/17774105-Orion-UI-kit-Charts-templates-infographics-in-Figma/attachments/12941517?mode=media'
        },
        {
          id: 4,
          image: Img4,
          title: 'Orion UI kit - Charts templates & infographics in Figma',
          gihub: 'https://github.com',
          demo:'https://cdn.dribbble.com/users/1187002/screenshots/17774094/media/0f5e75217cd330469e46a2c70bc67d8d.jpg?compress=1&resize=1200x900&vertical=top'
        },
        {
          id: 5,
          image: Img5,
          title: 'Orion UI kit - Charts templates & infographics in Figma',
          gihub: 'https://github.com',
          demo:'https://cdn.dribbble.com/users/1187002/screenshots/17774049/media/f0b4731a20722835abca41b96a3a29e9.jpg?compress=1&resize=1200x900&vertical=top'
        },
        {
          id: 6,
          image: Img6,
          title: 'Orion UI kit - Charts templates & infographics in Figma',
          gihub: 'https://github.com',
          demo:'https://cdn.dribbble.com/users/1187002/screenshots/17714978/media/5c070a7a4d536b0fc877c1a6e898efa1.jpg?compress=1&resize=1200x900&vertical=top'
        }
        
]
  
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
                <h3>{title }</h3>
          
            <div className='porfolio_item-cta'>
              <a href={github} className='btn'>Github</a>
                  <a href={demo}className='btn btn-primary' target='_blank'>
                Live Demo</a>
            </div>
          </article>
       


            )

         
         
          })}
      </div>
    </section>
  )
}
  


export default Portfolio