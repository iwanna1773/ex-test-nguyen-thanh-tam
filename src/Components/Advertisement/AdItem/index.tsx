import '../ad.scss'

interface IAdItem {
	image?: any,
	text?: string,
	description?: string,
	hashtag?: any,
}

const AdItem = (props: IAdItem) => {
	return (
		<div className="w-56">
			<div className="w-full h-fit relative">
				<img className="w-56 h-40" alt="info" src={props.image} />
				<div className="h-6 w-32 bg-amber-300 bottom-0 text-white text-sm px-3 absolute">{props.text}</div>
			</div>
			<p className="line-clamp-2">{props.description}</p>
			<div className="flex text-amber-500">
				{
					props.hashtag.map((item: string, idx: number) =>
						<p key={idx} className="mr-3 text-sm">{item}</p>
					)
				}
			</div>
		</div>
	)
}

export default AdItem