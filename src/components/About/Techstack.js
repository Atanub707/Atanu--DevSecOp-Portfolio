import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { FaGithub, FaDocker } from "react-icons/fa";
import {
  SiGithubactions,
  SiGitlab,
  SiDocker,
  SiJfrog,
  SiSonarqube,
  SiSnyk,
  SiKubernetes,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiPrometheus,
  SiGrafana,
  SiDatadog,
  SiNewrelic,
  SiElastic,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions /> {/* GitHub Actions */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab /> {/* GitLab */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDocker /> {/* Docker */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* DockerHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJfrog /> {/* JFrog */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube /> {/* SonarQube */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSnyk /> {/* Snyk */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes /> {/* Kubernetes */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws /> {/* AWS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud /> {/* Google Cloud */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /> {/* Microsoft Azure */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus /> {/* Prometheus */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana /> {/* Grafana */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDatadog /> {/* Datadog */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNewrelic /> {/* New Relic */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiElastic /> {/* Elastic (ELK Stack) */}
      </Col>
    </Row>
  );
}

export default Techstack;
