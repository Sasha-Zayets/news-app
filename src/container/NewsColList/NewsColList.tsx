import React from 'react';
import {
  Container,
  Title,
  TitleText,
  Content,
  NewsCard
} from './styles';
import {NewsType} from "../../store/types/home";

interface NewsColList {
  className?: string
  title: string
  news: Array<NewsType>
}

const NewsColList: React.FC<NewsColList> = ({ className, title, news }) => {
  return (
    <Container className={className}>
      <Title>
        <TitleText>
          { title }
        </TitleText>
      </Title>
      <Content>
        {
          news.length > 0
          ? news.map((item: NewsType, index: number) => {
              return <NewsCard key={index} news={item} />
            })
          : <strong>Not news</strong>
        }
      </Content>
    </Container>
  )
}

export default NewsColList;
