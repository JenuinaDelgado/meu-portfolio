import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import fb from '../../images/fb.png'
import insta from '../../images/insta.jpg'
import gith from '../../images/gith.png'


const Contact = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5>Contact</h5>
        <Card>
          <Row>
            <Col s={12} m={12}>
              <p>Mindelo/Cabo Verde</p>
              <p>Email: jenuinadelgado@gmail.com</p>
              <p>Telefone: +2385877591</p>
              <li><a class="facebook" href="https://web.facebook.com/profile.php?id=100009401287401"><img src={fb} height="30px" /></a></li>
              <div>
              <li><a class="instagram" href="https://github.com/JenuinaDelgado"><img src={gith} height="30px" /></a></li>
              </div>   
              <div>
              <li><a class="github" href="https://www.instagram.com/genugomez/?hl=p"><img src={insta} height="30px" /></a></li>
              </div>   
            </Col>
          </Row>  
        </Card>
    </Col>
  </Row>
  );


export default Contact;