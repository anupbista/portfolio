import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, Links } from './styles';
import social from '../../theme/Footer/social.json';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I am Programmer living in Nepal. Also you can stop and say hello!</h4>
          <Button>
            bistaanup77@gmail.com
          </Button>
          <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="28" src={icon} alt={name} />
          </a>
        ))}
      </Links>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I am Programmer living in Nepal. Also you can stop and say hello!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
