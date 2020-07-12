import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 240px;
`;

export const Navigation = styled.div`
  flex-grow: 2;
  text-align: right;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  font-weight: 400;
  color: #616161;
  text-transform: uppercase;
  margin-right: 25px;
  text-decoration: none;
  position: relative;
  
  &:before {
    content: "";
    height: 2px;
    width: 0;
    background-color: #e74643;
    position: absolute;
    left: 50%;
    bottom: -2px;
    transform: translateX(-50%);
    transition: all .3s;
  }
  
  &:hover {
    &:before {
      width: 100%;
    }
  }
  
  &:last-child {
    margin-right: 0;
  }
`;
