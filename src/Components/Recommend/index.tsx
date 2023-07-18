import MyRecommend1 from "../../Assets/img/MyRecommend-1.jpg"
import MyRecommend2 from "../../Assets/img/MyRecommend-2.jpg"
import MyRecommend3 from "../../Assets/img/MyRecommend-3.jpg"
import './recommend.scss'

const dataRecommend = [
	{
		title: 'BODY RECORD',
		description: '自分のカラダの記録',
		background: MyRecommend1,
	},
	{
		title: 'MY EXERCISE',
		description: '自分の運動の記録',
		background: MyRecommend2,
	},
	{
		title: 'MY DIARY',
		description: '自分の日記',
		background: MyRecommend3,
	},
]

const Recommend = () => {
	return (
		<div className="flex justify-center my-8">
			<div className="flex justify-between w-3/5">
				{
					dataRecommend.map((item, idx) => {
						return (
							<div key={idx} className="h-56 w-56 large-border relative">
								<div className="h-full w-full bg-black opacity-80 absolute top-0 z-10"></div>
								<img className="h-full w-full absolute top-0 z-0" alt='background' src={item.background} />

								<div className="absolute z-20 h-full w-full top-0 flex flex-col items-center">
									<p className="text-large text-amber-500 mt-16">{item.title}</p>
									<div className="text-xs text-center bg-amber-600 w-32 py-1 my-1">{item.description}</div>
								</div>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Recommend