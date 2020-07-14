import styled from 'styled-components';
import NewsCardMini from "../../components/NewsCardMini";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div``;

export const Title = styled.h2`
  color: #616161;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f1e3e3;
`;

export const TitleText = styled.span`
  position: relative;
  
  &:before {
    content: "";
    width: 100%;
    height: 4px;
    background-color: #e74643;
    position: absolute;
    bottom: -7px;
    left: 0;
  }
`;

export const NewsCard = styled(NewsCardMini)`
  padding-bottom: 10px;
  border-bottom: 1px solid silver;
  margin-bottom: 10px;
  
  &:last-child {
    border: none;
  }
`;
