import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip
);

export const options = {
	responsive: true,
	interaction: {
		mode: 'index' as const,
		intersect: false,
	},
	stacked: false,
	scales: {
		x: {
			grid: {
				color: '#777777',
			}
		},
		y: {
			display: false
		}
	}
};

const LineChart = (props: any) => {
	return <Line options={options} data={props.dataChart} />
}

export default LineChart