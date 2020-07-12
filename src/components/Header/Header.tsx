import React from 'react';
import {
  Wrapper,
  ContainerWrapper,
  Logo,
  Navigation,
  Link,
} from './styles';
import { Container } from '../../styles';
import logo from '../../../assets/images/logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <ContainerWrapper>
        <Logo src={logo} />
        <Navigation>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
        </Navigation>
      </ContainerWrapper>
    </Container>
  </Wrapper>
);

export default Header;
