import React from 'react';
import Typed from 'react-typed';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Typed
            strings={[
              `Hi, I'm Yusfi Adilaksa, `,
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop={false}
          >
          </Typed> <br />
          <Typed
            strings={[
              'Welcome To',
              'My Personal Portfolio']}
            typeSpeed={40}
            backSpeed={50}
            loop >
          </Typed>
        </SectionTitle>
        <SectionText>
          This website is a collection of projects that I have developed. I hope you guys like it.
        </SectionText>
        <a href="#about">
          <Button>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;