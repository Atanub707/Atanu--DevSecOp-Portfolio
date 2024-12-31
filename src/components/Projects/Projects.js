import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import editor from "../../Assets/Projects/codeEditor.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DevSecOps Project to setup Netflix"
              description="DevSecOps Project to setup Netflix clone on AWS using CICD, Security, ARGO CD, EKS,K8S."
              ghLink="https://github.com/Atanub707/DevSecOps-Netflix-Clone"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Netflix Clone With Argo CD Deployment project! 🎬[ DevSecOps Project Canary Deployment ] #2"
              description="I am ready for an exhilarating journey into the world of DevSecOps? Our thrilling project, Netflix Clone Deployment with Argo CD, where innovation meets reliability and security."
              ghLink="https://github.com/Atanub707/two-tier-flask-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="DevSecOps Project to setup Flask App"
              description="This is a simple Flask app that interacts with a MySQL database. The app allows users to submit messages, which are then stored in the database and displayed on the frontend."
              ghLink="https://github.com/Atanub707/two-tier-flask-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="DevSecOps Project to setup Static WebApp"
              description="This project showcases the seamless deployment of a static website on AWS S3 with CloudFront using GitHub Actions. By automating the deployment process, we ensure rapid and efficient updates to our website."
              ghLink="https://github.com/Atanub707/Netflix-Static-WebApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
