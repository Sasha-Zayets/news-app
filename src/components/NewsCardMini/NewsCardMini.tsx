import React from 'react';
import {
  Card,
  Frame,
  Image,
  Content,
  Title,
  Date,
} from './styles';

interface NewsCardMini {
  className?: string
}

const NewsCardMini: React.FC<NewsCardMini> = ({ className }) => {
  return (
    <Card className={className}>
      <Frame>
        <Image src="https://picsum.photos/536/354"/>
      </Frame>
      <Content>
        <Date>18.20.2020</Date>
        <Title>Random Name New</Title>
      </Content>
    </Card>
  )
}

export default NewsCardMini;
