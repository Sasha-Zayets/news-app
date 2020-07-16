import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  NewsRow,
  NewsCol,
} from './styles';
import { Container } from '../../styles';
import NewsColList from "../../container/NewsColList";
import { getPopularNews } from "../../store/actions/homeActions";
import {HomeStateType, newsType} from '../../store/types/home';

interface HomePropsType {
  popularNews: Array<newsType>
  lastNews: Array<newsType>
  getPopularNews: Function
}
const Home: React.FC<HomePropsType> = ({ getPopularNews }) => {
  useEffect(() => {
    getPopularNews();
  });

  return (
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
  )
}

const mapStateToProps = (state: HomeStateType) => ({
  popularNews: state.popularNews,
  lastNews: state.lastNews
});

const mapDispatchToProps = (dispatch: any) => ({
  getPopularNews: () => dispatch(getPopularNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
