import React from 'react';
import svg from '../../../assets/svg/sprite.svg';

interface SvgSprite {
  className?: string
  name: string
}

const SvgSprite: React.FC<SvgSprite> = ({ className, name }) => (
  <svg className={className}>
    <use href={`${svg}#${name}`}></use>
  </svg>
);

export default SvgSprite;
