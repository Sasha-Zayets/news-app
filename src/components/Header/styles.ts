import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import SvgSprite from "../SvgSprite";

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e74643;
  padding-bottom: 3px;
`;

export const Logo = styled.img`
  max-width: 240px;
`;

export const Navigation = styled.div`
  flex-grow: 2;
  margin-top: 30px;
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
    height: 3px;
    width: 0;
    background-color: #e74643;
    position: absolute;
    left: 50%;
    bottom: -4px;
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

export const Search = styled.div`
  min-width: 280px;
  height: 35px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 100%;
  flex-grow: 2;
  border: 1px solid #e2e2e2;
  background-color: #e2e2e2;
  border-right: none;
  padding: 0 10px;
  outline: none;
  transition: all .3s;
  
  &:focus {
    outline: none;
    background-color: white;
  }
`;

export const SearchButton = styled.button`
  width: 40px;
  min-width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: #e74643;
  cursor: pointer;
  transition: all .3s;
  
  &:hover {
    background-color: #ca3936;
  }
`;

export const SearchIcon = styled(SvgSprite)`
  fill: white;
  width: 15px;
  height: 15px;
`;
