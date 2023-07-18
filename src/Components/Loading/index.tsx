import loading from "../../Assets/icon/loading.svg"

const Loading = () => {
	return (
		<div className="flex justify-center relative">
			<img className="absolute animate-spin top-10" alt="loading" src={loading} />
			<div className="absolute flex top-28 text-white">
				<p className="mt-1 mr-2">05/21</p>
				<p className="text-xl">75%</p>
			</div>
		</div>
	)
}

export default Loading