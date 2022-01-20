const Crypto = (props) => {
	console.log('Crypto Element invoked')
	let color = 'black';
	const currPrice = props.currCoin.quotes.USD.price;
	if (props.prevCoin !== -1) {
		const prevPrice = props.prevCoin.quotes.USD.price;

		console.log(props)
		// console.log('currPrice',currPrice)

		if (currPrice < prevPrice) {
			color = 'red';
		} else if(currPrice > prevPrice){
			color = 'green';
		} else {
			color = 'black';
		}
	}

	return (
		<div>
			<h2>
				<em>{props.currCoin.name}:</em>{' '}
				<span style={{ color: color }}>
					{currPrice.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}
				</span>
			</h2>
		</div>
	);
};
export default Crypto;
