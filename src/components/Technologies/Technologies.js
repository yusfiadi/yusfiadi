import React from 'react';
import { DiReact } from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiStyledcomponents, SiMaterialui, SiRedux, SiJest } from 'react-icons/si'
import { GrGraphQl, } from 'react-icons/gr'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider colorAlt divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the front-end web development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React.js</ListTitle>
          <ListParagraph>
            A JavaScript library for building user interfaces
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiNextdotjs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Next.js</ListTitle>
          <ListParagraph>
            A JavaScript framework that lets us build server-side rendering and static web applications using React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTypescript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>TypeScript</ListTitle>
          <ListParagraph>
            A strongly typed programming language that builds on JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiRedux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Redux</ListTitle>
          <ListParagraph>
            A predictable state container for JavaScript apps
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GrGraphQl size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>GraphQL</ListTitle>
          <ListParagraph>
            A query language for APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiStyledcomponents size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>styled-components</ListTitle>
          <ListParagraph>
            Lets we write actual CSS in our JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiMaterialui size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Material-UI</ListTitle>
          <ListParagraph>
            An open-source project that features React components that implement Google's Material Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiJest size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Jest</ListTitle>
          <ListParagraph>
            A JavaScript testing framework designed to ensure correctness of any JavaScript codebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
