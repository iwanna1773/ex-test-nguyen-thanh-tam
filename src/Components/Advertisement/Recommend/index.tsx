interface IItemRecommend {
	title: string,
	description: string,
}

const Recommend = (props: IItemRecommend) => {
	return (
		<div className="h-40 w-56 bg-black">
			<p className="text-amber-500 text-2xl mt-6">{props.title}</p>
			<hr className="w-1/5 inline-flex"/>
			<p className="text-white">
				{props.description}
			</p>
		</div>
	)
}

export default Recommend