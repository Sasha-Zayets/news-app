import React from 'react';
import {
  Wrapper,
  Link,
} from "./styles";
import { Container } from '../../styles';

const Footer = () => (
  <Wrapper>
    <Container>
      &#169; developed
      <Link
        href="https://github.com/Sasha-Zayets/"
        target="__blank"
      >Sasha Zayets</Link>
    </Container>
  </Wrapper>
);

export default Footer;
