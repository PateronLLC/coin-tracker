// React function component
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';
// import React, { useState } from 'react';

const client = new CoinpaprikaAPI();

const Crypto = (props) => {
	client.getTicker(props).then(console.log).catch(console.error);
	client.getGlobal().then(console.log).catch(console.error);
	return <div></div>;
};
export default Crypto;
