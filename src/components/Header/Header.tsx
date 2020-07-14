import React from 'react';
import {
  Wrapper,
  ContainerWrapper,
  Logo,
  Navigation,
  Link,
  Search,
  SearchInput,
  SearchButton,
  SearchIcon
} from './styles';
import { Container } from '../../styles';
import logo from '../../../assets/images/logo.svg';

const Header = () => (
  <Wrapper>
    <Container>
      <Logo src={logo} />
      <ContainerWrapper>
        <Navigation>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
          <Link to="/">Test</Link>
        </Navigation>
        <Search>
          <SearchInput />
          <SearchButton>
            <SearchIcon name="search" />
          </SearchButton>
        </Search>
      </ContainerWrapper>
    </Container>
  </Wrapper>
);

export default Header;
