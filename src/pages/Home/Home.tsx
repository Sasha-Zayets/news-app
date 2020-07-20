import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  HomeWrapper,
  NewsRow,
  NewsCol,
} from './styles';
import { Container } from '../../styles';
import NewsColList from "../../container/NewsColList";
import Preloader from "../../components/Preloader";
import { getPopularNews } from "../../store/actions/homeActions";
import { NewsType } from '../../store/types/home';
import { Action } from 'redux';
import { RootState } from "../../store/reducers";
import { ThunkDispatch } from "redux-thunk";

interface HomePropsType {
  popularNews: Array<NewsType>
  lastNews: Array<NewsType>
  loading: boolean
  getPopularNews: () => void
}
const Home: React.FC<HomePropsType> = ({ popularNews, getPopularNews, loading }) => {
  useEffect(() => {
    getPopularNews();
  }, [getPopularNews]);

  return (
    <HomeWrapper>
      <Container>
        <NewsRow>
          <Preloader loading={ loading } />
          <NewsCol>
            <NewsColList title="Popular news" news={ popularNews } />
          </NewsCol>
          <NewsCol>
          </NewsCol>
        </NewsRow>
      </Container>
    </HomeWrapper>
  )
}

const mapStateToProps = (state: RootState) => ({
  popularNews: state.home.popularNews,
  lastNews: state.home.lastNews,
  loading: state.home.loading,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  getPopularNews: () => dispatch(getPopularNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
