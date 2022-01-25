import './App.css';
import TopTen from './components/TopTen';
import Chart from './components/Chart';

// 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

const data1 = [
	{
		time_open: '2019-01-01T00:00:00Z',
		time_close: '2019-01-01T23:59:59Z',
		open: 3743.13383814,
		high: 3848.768792,
		low: 3695.32467935,
		close: 3846.6792974,
		volume: 3062073034,
		market_cap: 65338972677,
	},
	{
		time_open: '2019-01-02T00:00:00Z',
		time_close: '2019-01-02T23:59:59Z',
		open: 3852.19783968,
		high: 3951.20469616,
		low: 3811.88806393,
		close: 3941.99122065,
		volume: 3627095860,
		market_cap: 67250129005,
	},
	{
		time_open: '2019-01-03T00:00:00Z',
		time_close: '2019-01-03T23:59:59Z',
		open: 3942.27312969,
		high: 3942.57529017,
		low: 3828.26988091,
		close: 3838.44932784,
		volume: 3126326309,
		market_cap: 68829869344,
	},
	{
		time_open: '2019-01-04T00:00:00Z',
		time_close: '2019-01-04T23:59:59Z',
		open: 3839.52173614,
		high: 3870.63227045,
		low: 3786.37128078,
		close: 3858.46442292,
		volume: 3540011021,
		market_cap: 67043374929,
	},
	{
		time_open: '2019-01-05T00:00:00Z',
		time_close: '2019-01-05T23:59:59Z',
		open: 3856.34846409,
		high: 3903.24081084,
		low: 3816.67073406,
		close: 3834.6728806,
		volume: 3617557144,
		market_cap: 67344327182,
	},
	{
		time_open: '2019-01-06T00:00:00Z',
		time_close: '2019-01-06T23:59:59Z',
		open: 3830.3623075,
		high: 4083.36566222,
		low: 3817.25361926,
		close: 4065.86408876,
		volume: 3847180896,
		market_cap: 66898522568,
	},
	{
		time_open: '2019-01-07T00:00:00Z',
		time_close: '2019-01-07T23:59:59Z',
		open: 4064.02150509,
		high: 4081.69177218,
		low: 3996.61443413,
		close: 4008.93853051,
		volume: 3951773734,
		market_cap: 70986413998,
	},
	{
		time_open: '2019-01-08T00:00:00Z',
		time_close: '2019-01-08T23:59:59Z',
		open: 4010.42269967,
		high: 4098.08303384,
		low: 3983.19142255,
		close: 4015.95022621,
		volume: 4035245744,
		market_cap: 70057171795,
	},
	{
		time_open: '2019-01-09T00:00:00Z',
		time_close: '2019-01-09T23:59:59Z',
		open: 4015.47487969,
		high: 4054.90017447,
		low: 4004.7500219,
		close: 4017.78740453,
		volume: 3847633406,
		market_cap: 70154008261,
	},
	{
		time_open: '2019-01-10T00:00:00Z',
		time_close: '2019-01-10T23:59:59Z',
		open: 4018.96784354,
		high: 4051.39193795,
		low: 3644.56656998,
		close: 3665.51636057,
		volume: 4987370636,
		market_cap: 70223372883,
	},
	{
		time_open: '2019-01-11T00:00:00Z',
		time_close: '2019-01-11T23:59:59Z',
		open: 3663.31971064,
		high: 3686.79541619,
		low: 3631.54852907,
		close: 3655.71457125,
		volume: 3761766983,
		market_cap: 64016054028,
	},
];

const data = [
	{ year: 1980, efficiency: 24.3, sales: 8949000 },
	{ year: 1985, efficiency: 27.6, sales: 10979000 },
	{ year: 1990, efficiency: 28, sales: 9303000 },
	{ year: 1991, efficiency: 28.4, sales: 8185000 },
	{ year: 1992, efficiency: 27.9, sales: 8213000 },
	{ year: 1993, efficiency: 28.4, sales: 8518000 },
	{ year: 1994, efficiency: 28.3, sales: 8991000 },
	{ year: 1995, efficiency: 28.6, sales: 8620000 },
	{ year: 1996, efficiency: 28.5, sales: 8479000 },
	{ year: 1997, efficiency: 28.7, sales: 8217000 },
	{ year: 1998, efficiency: 28.8, sales: 8085000 },
	{ year: 1999, efficiency: 28.3, sales: 8638000 },
	{ year: 2000, efficiency: 28.5, sales: 8778000 },
	{ year: 2001, efficiency: 28.8, sales: 8352000 },
	{ year: 2002, efficiency: 29, sales: 8042000 },
	{ year: 2003, efficiency: 29.5, sales: 7556000 },
	{ year: 2004, efficiency: 29.5, sales: 7483000 },
	{ year: 2005, efficiency: 30.3, sales: 7660000 },
	{ year: 2006, efficiency: 30.1, sales: 7762000 },
	{ year: 2007, efficiency: 31.2, sales: 7562000 },
	{ year: 2008, efficiency: 31.5, sales: 6769000 },
	{ year: 2009, efficiency: 32.9, sales: 5402000 },
	{ year: 2010, efficiency: 33.9, sales: 5636000 },
	{ year: 2011, efficiency: 33.1, sales: 6093000 },
	{ year: 2012, efficiency: 35.3, sales: 7245000 },
	{ year: 2013, efficiency: 36.4, sales: 7586000 },
	{ year: 2014, efficiency: 36.5, sales: 7708000 },
	{ year: 2015, efficiency: 37.2, sales: 7517000 },
	{ year: 2016, efficiency: 37.7, sales: 6873000 },
	{ year: 2017, efficiency: 39.4, sales: 6081000 },
];

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Coin 💩 Tracker</h1>
			</header>
			<section>
				<Chart data={data1} />
				<TopTen />
			</section>
		</div>
	);
}

export default App;
