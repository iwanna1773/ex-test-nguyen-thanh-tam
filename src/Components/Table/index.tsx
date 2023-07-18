import LineChart from "../Chart"
import './table.scss'

const tableData = [
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
	{
		title: '家事全般（立位・軽い）',
		energy: '26kcal',
		time: '10 min',
	},
]

const dataChart = {
	labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	datasets: [
		{
			label: 'data 1',
			data: [100, 90, 85, 86, 80, 78, 75, 68, 60, 49, 59, 30],
			borderColor: '#8FE9D0',
			backgroundColor: '#8FE9D0',
		},
		{
			label: 'data 2',
			data: [90, 90, 85, 80, 78, 88, 68, 60, 49, 59, 30, 5],
			borderColor: '#FFCC21',
			backgroundColor: '#FFCC21',
		},
	],
};

const Table = () => {
	return (
		<div className="flex flex-col items-center my-8">
			<div className="w-3/5 h-fit bg-black">
				<div className="flex">
					<p className="w-14 text-white text-sm text-left mx-6 my-3">BODY RECORD</p>
					<p className="w-fit text-white flex text-xl items-center">2021.05.21</p>
				</div>

				<div className="flex justify-center h-72">
					<div className="w-8/12">
						<LineChart dataChart={dataChart} />
					</div>
				</div>

				<div className="flex w-1/3 justify-around mt-6 mb-3 ml-5">
					<button className="h-7 w-16 bg-white rounded-xl text-amber-500">日</button>
					<button className="h-7 w-16 bg-white rounded-xl text-amber-500">週</button>
					<button className="h-7 w-16 bg-white rounded-xl text-amber-500">月</button>
					<button className="h-7 w-16 bg-amber-500 rounded-xl text-white">年</button>
				</div>
			</div>

			<div className="w-3/5 h-72 bg-black mt-8">
				<div className="flex">
					<p className="w-14 text-white text-sm text-left mx-6 my-3">MY EXERCISE</p>
					<p className="w-fit text-white flex text-xl items-center">2021.05.21</p>
				</div>

				<div className="cover-table">
					<ul className="table-custom grid grid-cols-2 gap-1">
						{
							tableData.map((item, idx) =>
								<li key={idx} className="flex">
									<div className="text-left ml-3 w-4/5">
										<h3>{item.title}</h3>
										<p className="text-amber-400">{item.energy}</p>
									</div>
									<h3 className="text-amber-400">{item.time}</h3>
								</li>
							)
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Table