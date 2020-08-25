import React from 'react';

import Container from './styles';

import HeadsImage from '../../assets/heads.jpg';
import TailsImage from '../../assets/tails.jpg';

export const CoinImage = {
  heads: HeadsImage,
  tails: TailsImage,
};

export interface CoinProps {
  side: 'heads' | 'tails';
  imageSource: string;
}

const Coin: React.FC<CoinProps> = ({ side, imageSource }) => (
  <Container>
    <img src={imageSource} alt={side} />
    <p>{side}</p>
  </Container>
);

export default Coin;
