import { useEffect, useState } from "react"
import header from "../../Assets/img/d01.jpg"
import LineChart from "../Chart"
import Loading from "../Loading"

const dataChart = {
	labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
	datasets: [
		{
			label: 'data 1',
			data: [55, 23, 96, 6, 28, 58, 15, 88, 21, 69, 59, 12],
			borderColor: '#8FE9D0',
			backgroundColor: '#8FE9D0',
		},
		{
			label: 'data 2',
			data: [15, 88, 21, 69, 59, 12, 55, 23, 96, 6, 28, 58],
			borderColor: '#FFCC21',
			backgroundColor: '#FFCC21',
		},
	],
};

const Header = () => {
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<div className="flex">
			<div className="w-2/5 h-72 bg-black">
				{
					<>
						<Loading />
						<img className="h-full w-full object-cover" alt="img header" src={header} />
					</>
				}
			</div>
			<div className="w-3/5 h-72">
				<div className="flex justify-center bg-black h-full pt-4">
					<div className="w-7/12 h-20">
						<LineChart dataChart={dataChart} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header