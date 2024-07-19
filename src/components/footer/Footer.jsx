import React from 'react'
import './footer.css';

const Footer = () => {
  return (
      <footer className="footer">
          <div className="footer__container container">
              <h1 className="footer__title">Abhinav Kulkarni</h1>

              <ul className="footer__list">
                  <li>
                      <a href="#about" className="footer__link">About</a>
                  </li>

                  <li>
                      <a href="#portfolio" className="footer__link">Projects</a>
                  </li>

                  <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                  </li>
                  
              </ul>
              
              <div className="footer__social">
                  <a href="https://www.linkedin.com/in/abhinav-kulkarni-95103588/" className="footer__social-link" target='_blank'>
                  <i className="bx bxl-linkedin"></i>
                  </a>
              
                  <a href="https://github.com/abhinav2697" className="footer__social-link" target='_blank'>
                      <i className="bx bxl-github"></i>
                  </a>

                  <a href="https://x.com/abhinav2697" className="footer__social-link" target='_blank'>
                      <i className="bx bxl-twitter"></i>
                  </a>
                 
                  
              </div>
             <span className="footer__copy">&#169;Abhinav Kulkarni | All rights reserved | 2024</span>
          </div>
    </footer>
  )
}

export default Footer