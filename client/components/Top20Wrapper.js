import React from 'react';
import Console from './Top20Console';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import Header from '../containers/headerContainer';


const Top20Wrapper = () =>
  (
    <div style= {{paddingLeft: '20px'}}>
        <Header />
        <Title>
          Campaign Finance Top 20 Lists
        </Title>
      <Section>
        <Console />
      </Section>
    </div>
  );

export default Top20Wrapper;
