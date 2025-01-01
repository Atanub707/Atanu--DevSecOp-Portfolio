import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have fallen in love with the world of DevSecOps, where I get to combine my technical expertise with a security-first mindset. Over time, I’ve honed my skills in programming, mastering classics like C++, JavaScript, and Go, while delving deeper into secure development practices and automation. 🤷‍♂️
              <br />
              <br />My field of interest lies in building secure, scalable web technologies and products, as well as exploring innovative solutions in areas like Blockchain. I’m passionate about integrating security into every phase of the development
              <i>
                <b className="purple"> lifecycle, ensuring robust, efficient, and safe systems. </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my expertise in modern frameworks like React.js and Next.js and my hands-on experience with Node.js to build and secure cutting-edge solutions. As a DevSecOps engineer,
              <i>
                <b className="purple">I thrive on automating pipelines, enforcing secure coding standards, and bridging the gap between development, operations, and security teams to deliver quality, secure products. </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and */}
              <i>
                <b className="purple">
                  {" "}
                  {/* Modern Javascript Library and Frameworks */}
                </b>
              </i>
              {/* &nbsp; like */}
              <i>
                {/* <b className="purple"> React.js and Next.js</b> */}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/atanub707"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atanu-biswas-006796239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;