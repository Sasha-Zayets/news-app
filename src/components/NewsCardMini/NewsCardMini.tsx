import React from 'react';
import {
  Card,
  Frame,
  Image,
  Content,
  Title,
  DateValue,
} from './styles';
import { NewsType } from "../../store/types/home";

interface NewsCardMini {
  className?: string,
  news: NewsType
}

const NewsCardMini: React.FC<NewsCardMini> = ({ className, news }) => {
  const filterDate: Date = new Date(news.publishedAt);
  const resultDate: string = `${filterDate.getDate()}/${filterDate.getMonth()}/${filterDate.getFullYear()}`;

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
