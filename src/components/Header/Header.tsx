import React from 'react';
import {
  Wrapper,
  ContainerWrapper,
  Logo,
} from './styles';
import { Container } from '../../styles';
import logo from '../../../assets/images/logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <ContainerWrapper>
        <Logo src={logo} />
      </ContainerWrapper>
    </Container>
  </Wrapper>
);

export default Header;
