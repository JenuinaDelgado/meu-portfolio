import React from "react";
import { Row, Col, Card } from 'react-materialize';
import jenu from '../../images/jenu.jpg';

const UserProfile = () => (
  <Card>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={jenu} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Jenuina Delgado</h5>
        <p className="red white-text">Engenheira Informática</p>
      </Row>
  </Card>

);
export default UserProfile;