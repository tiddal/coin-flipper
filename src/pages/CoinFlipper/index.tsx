import React, { useState } from 'react';

import Coin, { CoinImage, CoinProps } from '../../components/Coin';

import Container from './styles';

const CoinFlipper: React.FC = () => {
  const [headsCounter, setHeadsCounter] = useState(0);
  const [tailsCounter, setTailsCounter] = useState(0);
  const [currentSide, setCurrentSide] = useState<CoinProps>();

  function flipTheCoin() {
    const sides: CoinProps['side'][] = ['heads', 'tails'];
    const side = sides[Math.floor(Math.random() * sides.length)];
    setCurrentSide({
      side,
      imageSource: CoinImage[side],
    });
    if (side === 'heads') setHeadsCounter(headsCounter + 1);
    if (side === 'tails') setTailsCounter(tailsCounter + 1);
  }

  return (
    <Container>
      <h1>Let&apos;s Flip A Coin</h1>
      {currentSide && <Coin side={currentSide.side} imageSource={currentSide.imageSource} />}
      <button type="button" onClick={flipTheCoin}>Flip Me!</button>
      <p>
        {`
          Out of ${headsCounter + tailsCounter} flips, 
          there have been ${headsCounter} heads 
          and ${tailsCounter} tails.
        `}
      </p>
    </Container>
  );
};

export default CoinFlipper;
