import React from 'react';
import {
  Icon,
  Loader
} from "./styles";
import loader from '../../../assets/svg/loader.svg';

export interface Preloader {
  loading: boolean
}

const Preloader: React.FC<Preloader> = ({ loading }) => {
  return (
    <Loader loading={ loading }>
      <Icon src={loader} />
    </Loader>
  )
}

export default Preloader;
