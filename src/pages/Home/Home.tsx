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
import { newsType } from '../../store/types/home';
import { Action } from 'redux';
import { RootState } from "../../store/reducers";
import { ThunkDispatch } from "redux-thunk";

interface HomePropsType {
  popularNews: Array<newsType>
  lastNews: Array<newsType>
  getPopularNews: () => void
}
const Home: React.FC<HomePropsType> = ({ popularNews, getPopularNews }) => {
  useEffect(() => {
    getPopularNews();
  }, [getPopularNews]);

  return (
    <HomeWrapper>
      <Container>
        <NewsRow>
          <NewsCol>
            <NewsColList title="Popular news" news={ popularNews } />
          </NewsCol>
          <NewsCol>
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
  lastNews: state.home.lastNews
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  getPopularNews: () => dispatch(getPopularNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
