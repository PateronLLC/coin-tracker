// React function component
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';
import React, { useState, useEffect, useRef } from 'react';
import Crypto from './Crypto';
const clientAPI = new CoinpaprikaAPI();

const TopTen = (props) => {
  const updateInterval = 10000;
  const numOfCoins = 10;
  const [currCoins, setCurrCoins] = useState([]);

  useEffect(() => {
    const getCoins = () => {
      clientAPI
        .getAllTickers()
        .then((data) => {
          data = data.filter((value, index) => index < numOfCoins);
          data = data.map((element, index) => <Crypto key={index} currCoin={element} />);
          setCurrCoins(data);
        })
        .catch(console.error);
    };
    getCoins();
    const interval = setInterval(getCoins, updateInterval);

    return () => clearInterval(interval);
  }, []);

  return <div>{currCoins}</div>;
};
export default TopTen;
