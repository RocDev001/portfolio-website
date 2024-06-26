import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
   <Section id='tech'>
     <SectionDivider />
     <br />
     <SectionTitle>Technologies</SectionTitle>
     <SectionText>Skilled in leveraging React's component-based architecture to create seamless user interfaces and optimize performance. Experienced in integrating with RESTful APIs and third-party libraries to deliver scalable solutions tailored to client needs.</SectionText>
     <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
     </List>
   </Section>
);

export default Technologies;
