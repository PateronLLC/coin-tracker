import React, { useEffect, useRef, useState } from 'react';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Crypto = (props) => {
  const [color, setColor] = useState('black');
  const [percentChange, setPercentChange] = useState(0);
  const { currCoin } = props;
  const currPrice = Object.prototype.hasOwnProperty.call(currCoin, 'name')
    ? props.currCoin.quotes.USD.price
    : -1;
  const prevCoin = usePrevious(currCoin);

  useEffect(() => {
    if (prevCoin !== undefined) {
      const prevPrice = prevCoin.quotes.USD.price;

      // Color changing logic
      if (currPrice < prevPrice) {
        setColor('red');
      } else if (currPrice > prevPrice) {
        setColor('green');
      }

      // Precentage change logic
      if (currPrice - prevPrice !== 0) {
        setPercentChange(100 * ((currPrice - prevPrice) / prevPrice));
      }
    }
  }, [currCoin]);

  return (
    <div>
      <h2>
        <em>{props.currCoin.name}:</em>{' '}
        <span style={{ color: color }}>
          {currPrice.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}{' '}
          | {parseFloat(percentChange).toFixed(2) + '%'}
        </span>
      </h2>
    </div>
  );
};
export default Crypto;
