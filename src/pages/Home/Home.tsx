import React from 'react';
import {
  HomeWrapper,
  NewsRow,
  NewsCol,
} from './styles';
import { Container } from '../../styles';
import NewsColList from "../../container/NewsColList";

const Home = () => (
    <HomeWrapper>
        <Container>
          <NewsRow>
            <NewsCol>
              <NewsColList title="Popular news" />
            </NewsCol>
            <NewsCol>
              <NewsColList title="Last news" />
            </NewsCol>
            <NewsCol>

            </NewsCol>
          </NewsRow>
        </Container>
    </HomeWrapper>
);

export default Home;
