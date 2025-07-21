import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
   <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Peter, a Frontend developer <br />
        Welcome To <br />
        My Personal Portfolio <br />
      </SectionTitle>
      <SectionText>
        "As a junior React developer, I bring enthusiasm, a strong foundation in JavaScript, and a willingness to learn and grow. With hands-on experience in building React applications, I am eager to contribute to projects, collaborate with team members, and expand my skills under mentorship. I am dedicated to delivering quality code, embracing feedback, and continuously improving to become a valuable asset to your development team."
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/RocDev001'} >Learn More</Button>
    </LeftSection>
   </Section>
);

export default Hero;
