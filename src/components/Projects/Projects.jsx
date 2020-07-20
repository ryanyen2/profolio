import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
          
          {/* Team */}
          <Title title="My Teams" />
          <div>
            <Row>
              <Col lg={2} sm={12}>
                <div className='small-box btn btn-warning'>
                  <h2>NetWorld Tech Ltd.</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>IEEE-Eta-kappa-Nu Club</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>IEEE-HKN Web TaskForce</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>CityU IT Team</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>MC-Hackathon Development Team</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>CityU Robotic Team</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>Business Proposal and Competition Club</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>Athletic Team Aquatic Team</h2>
                </div>
              </Col>
              <Col lg={2} sm={12}>
                <div className='btn btn-warning small-box'>
                  <h2>R6 Helper Group</h2>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
