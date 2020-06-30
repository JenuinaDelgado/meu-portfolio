// Importando o React
import React from "react";
// Importando os componentes da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
 
// Recebe os parâmetros passados para o componente na variável props
const About = (props) => (
  <Card>
      <Row>
        <Col s={2} m={2}>
          <img src={props.image} height="55px" />
        </Col>
        <Col s={10} s={10}>
          <p><b><span className="red white-text">{props.title}</span></b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default About;