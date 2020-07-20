import styled from 'styled-components';
import { Preloader } from "./Preloader";

export const Loader = styled.div<Preloader>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: white;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ loading }): string => (
    loading
    ? 'display: flex;'
    : 'display: none;'
  )}

`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
`;
