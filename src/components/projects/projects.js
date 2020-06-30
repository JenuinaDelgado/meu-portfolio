import React from "react";
import { Row, Col } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import About from '../about/about'
import redes from '../../images/redes.jpg';
import bd from '../../images/bd.png';
import amb from '../../images/amb.jpg';



const Projects = () => (
  <Row>
  <Col m={3} s={12}>
    <UserProfile />
  </Col>
  <Col m={8} s={12}>
      <h5 className="subtitle">Projects</h5>
 

      {/* Passando os parâmetros title, description e image para o component About */}
      <About title="Redes Computadores"
                  description="O propósito desse projeto foi a criação de uma simulação duma pequena rede de computadores entre uma empresa e suas filiais, que se encontram espalhadas sobre todas as Ilhas de Cabo Verde, no Cisco Packet Tracer."
                  image={redes}
      />
      <About title="Ambiente Virtual"
                  description="Este trabalho deu-me especial gozo realizar. Foi desenvolvido no Blender e simula uma pequena ilha. É possível interagir com o barco que faz um circuito pela mar. O que mais gostei neste projecto foi ter liberdade quase total para dar largas à minha imaginação e fazer a referida modelagem."
                  image={amb}                    
      /> 
      <About title="Base Dados"
                  description="Com este projecto aprendi as bases do desenvolvimento de bases de dados, neste caso, simulando o funcionamento de uma imobiliária. No produto final é possível fazer listagem de inquilinos, proprietários, imovéis disponíveis entre outros relacionados. Em que podia-se introduzir, editar. selecionar dados."
                  image={bd}                    
      /> 
  </Col>
</Row>
);

export default Projects;