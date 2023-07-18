import Diary from "../../Components/Diary"
import Recommend from "../../Components/Recommend"
import Table from "../../Components/Table"

const Records = () => {
	return (
		<div className="my-32">
			<Recommend />
			<Table />
			<Diary />
		</div>
	)
}

export default Records