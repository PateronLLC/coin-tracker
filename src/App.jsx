import './App.css';
import TopTen from './components/TopTen';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>🖕Coin Tracker🖕</h1>
			</header>
			<section>
				<TopTen />
			</section>
		</div>
	);
}

export default App;
