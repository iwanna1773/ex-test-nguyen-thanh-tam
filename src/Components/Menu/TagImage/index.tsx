interface ITagItem {
	image: any,
	text?: string,
}

const TagItem = (props: ITagItem) => {
	return (
		<div className="w-56 h-56 relative">
			<img className="w-56 h-56" alt="info" src={props.image} />
			<div className="h-6 w-28 bg-amber-300 bottom-0 text-white absolute">{props.text}</div>
		</div>
	)
}

export default TagItem