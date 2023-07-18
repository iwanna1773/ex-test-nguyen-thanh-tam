import { useNavigate } from "react-router-dom"

interface IItemMenu {
	icon: any,
	text?: string,
	ping?: any,
	link?: string,
}

const ItemMenu = (props: IItemMenu) => {
	const navigate = useNavigate()

	const handleRedirect = () => {
		if (props.link) {
			navigate(props.link)
		}
	}

	return (
		<div className="flex text-white items-center mx-5 cursor-pointer relative" onClick={() => handleRedirect()}>
			<img className="h-10" alt="info" src={props.icon} />
			<div>{props.text}</div>
			{
				props.ping && <img className="h-5 absolute animate-pulse top-3 left-6" alt="ping" src={props.ping} />
			}
		</div>
	)
}

export default ItemMenu