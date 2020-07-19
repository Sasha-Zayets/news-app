import React from 'react';
import {
  Card,
  Frame,
  Image,
  Content,
  Title,
  DateValue,
} from './styles';
import {newsType} from "../../store/types/home";

interface NewsCardMini {
  className?: string,
  news: newsType
}

const NewsCardMini: React.FC<NewsCardMini> = ({ className, news }) => {
  const filterDate = new Date(news.publishedAt);
  const resultDate: string = `${filterDate.getDate()}/${filterDate.getMonth()}/${filterDate.getFullYear()}`;
  console.log(resultDate);

  return (
    <Card className={className}>
      <Frame>
        <Image src={news.urlToImage} />
      </Frame>
      <Content>
        <DateValue>
          { resultDate }
        </DateValue>
        <Title>
          { news.title }
        </Title>
      </Content>
    </Card>
  )
}

export default NewsCardMini;
