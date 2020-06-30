import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../user_profile/user_profile'
import About from '../about/about'
import uni from '../../images/uni.png';
import me from '../../images/me.png';


const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
           <img src={me} height="60px" /> 
            <p> Olá, meu nome é Jenuina Delgado, licenciada em Engenharia informática e Sistemas Computacionais na Universidade do Mindelo. Pratico a minha área de paixão, e estou sempre em constante aprendizado, conhecendo novas técnologias e aplicando-as em projetos pessoais. Espero vir a desempenhar as minhas futuras funções no mercado de trabalho com sucesso.</p>
          </div>
        </Card>
        <h5 className="subtitle">Formação Acadêmica</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <About description="O curso oferecido pela Universidade do Mindelo, com duração de 4 anos, proporcionou a aprendizagem nas áreas de programação, engenharia e qualidade de software, entre outras. Curso este cuja finalidade é estar capacitado e habilitado para, profissionalmente, construir soluções adequadas à resolução de problemas das organizações e da sociedade, com a utilização das novas tecnologias e sistemas de informação, tendo como base toda a experiência acumulada e os conhecimentos adquiridos através de uma sólida formação no domínio das ciências matemáticas, da administração e da computação."
                    image={uni}
        />
       
    </Col>
  </Row>
  );

export default Home;