import React from "react";
import NextButton from "../NextButton";
import CardPanel from "../CardPanel";
import QuizConfigForm from "./QuizConfigForm";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { GitHub, Linkedin } from "react-feather";
const StartScreen = ({ onStartQuiz }) => {
  return (
    <>
      <CardPanel>
        <Row>
          <Col xs={7} sm={6}>
            <Card.Title>Trivia Quiz</Card.Title>
          </Col>
          <Col xs={5} sm={6}>
            <Card.Text className="author-text">
              <a
                href="https://github.com/haggstrom/"
                title="Anders Häggström på GitHub"
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitHub />
              </a>
              <a
                href="https://www.linkedin.com/in/anders-haggstrom/"
                title="Anders Häggström på LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Linkedin />
              </a>
            </Card.Text>
          </Col>
        </Row>

        <QuizConfigForm />
        <Card.Text>
          <small className="text-muted">
            Frågor från{" "}
            <a
              href="https://opentdb.com/api_config.php"
              title="Trivia API"
              rel="noopener noreferrer"
              target="_blank"
            >
              Trivia API
            </a>
          </small>
        </Card.Text>
      </CardPanel>
      <NextButton
        text="Start Quiz"
        onClick={onStartQuiz}
        showLoaderOnClick={true}
      />
    </>
  );
};

export default StartScreen;
