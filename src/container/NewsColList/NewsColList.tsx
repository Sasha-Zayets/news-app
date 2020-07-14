import React from 'react';
import {
  Container,
  Title,
  TitleText,
  Content,
  NewsCard
} from './styles';

interface NewsColList {
  className?: string,
  title: string
}

const NewsColList: React.FC<NewsColList> = ({ className, title }) => {
  return (
    <Container className={className}>
      <Title>
        <TitleText>
          { title }
        </TitleText>
      </Title>
      <Content>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Content>
    </Container>
  )
}

export default NewsColList;
