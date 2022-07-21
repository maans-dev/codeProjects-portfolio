import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          The Code House <br />
          Projects Portfolio
        </SectionTitle>
        <SectionText>
        The mission expresses your way of participating in this vision
        </SectionText>
        <Button onClick={props.handleClick}>Check it</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;