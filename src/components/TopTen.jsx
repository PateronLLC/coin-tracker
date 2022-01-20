// React function component
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';
import React, { useState } from 'react';

const client = new CoinpaprikaAPI();

const TopTen = (props) => {
	const [coin, setCoin] = useState(0);
  const chicken = "chicken coin";  
  client
		.getTicker({ coinId: 'btc-bitcoin' })
		.then((data)=>setCoin(data.price_usd))
		.catch(console.error);
  
	return (
		<div>
      <h1>{chicken}</h1>
			<h1>${coin}</h1>
		</div>
	);
};
export default TopTen;
