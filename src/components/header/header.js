import React from "react";
import { Navbar, Row} from 'react-materialize';
import { NavLink } from 'react-router-dom'


const Header = () => (
  <Row>  
    <Navbar className="red" >
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="projects">Projects</NavLink></li>
      <li><NavLink to="contact">Contact</NavLink></li>
    </Navbar>
  </Row>
);

export default Header;