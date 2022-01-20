// React function component
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';
import React, { useState, useEffect } from 'react';
import Crypto from './Crypto';
const clientAPI = new CoinpaprikaAPI();

const TopTen = (props) => {
	// const [currCoins, setCurrCoins] = useState([]);
	// const [prevCoins, setPrevCoins] = useState([]);
	let prevCoins = [];
	let currCoins = [];
	console.log('mount TopTen');
	const updateInterval = 3000;
	const numOfCoins = 4;

	const getCoins = () => {
		clientAPI
			.getAllTickers()
			.then((data) => {
				console.log('New fetch in getCoins');
				prevCoins = currCoins;
				let newCoins = data.filter((value, index) => index < numOfCoins);
				currCoins = newCoins;
				console.log(currCoins);
			})
			.catch(console.error);
	};

	const allCoins = [];
	if (prevCoins.length === 0) {
		prevCoins = Array(numOfCoins).fill(-1);
	}

	
	useEffect(() => {
		console.log('Component mounted');
		const interval = setInterval(() => {
			getCoins();
			currCoins.forEach((el, idx) => {
			allCoins.push(<Crypto key={idx} prevCoin={prevCoins[idx]} currCoin={el} />);
			});
		}, updateInterval);
		return () => clearInterval(interval);
	}, []);

	return <div>{allCoins}</div>;
};
export default TopTen;
