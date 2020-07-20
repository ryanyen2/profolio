import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/HeroImg';
import Title from '../Title/Title';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, 
    img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17 } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>

        <Fade className='container' left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h2>Tools I Used: </h2>
          <div className="box">
            <HeroImg filename={img} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">React</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img1} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Vue</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img2} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Java</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img3} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Python</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img4} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">C++</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img5} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">JavaScript</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img6} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">CSS</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img7} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">HTML</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img8} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Kotlin</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img9} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Flutter</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img10} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">NodeJS</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img11} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">AWS</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img12} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Docker</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img13} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">MySQL</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img14} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">MongoDB</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img15} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">GitHub</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img16} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">BitBucket</div>
            </div>
          </div>

          <div className="box">
            <HeroImg filename={img17} className='image'/>
            {/* <img src={img} alt="React" className="image" /> */}
            <div className="overlay">
              <div className="text">Bootstrap</div>
            </div>
          </div>
        </Fade>

      </Container>
    </section>
  );
};

export default Header;
