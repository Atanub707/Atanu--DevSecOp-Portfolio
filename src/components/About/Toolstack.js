import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiMicrosoftteams,  // Microsoft Teams
  SiJira,            // Jira
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos /> {/* macOS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack /> {/* Slack */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel /> {/* Vercel */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftteams /> {/* Microsoft Teams */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> {/* Jira */}
      </Col>
    </Row>
  );
}

export default Toolstack;