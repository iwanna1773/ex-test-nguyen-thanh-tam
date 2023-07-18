import knife from "../../Assets/img/knife.svg"
import lunch from "../../Assets/img/lunch.svg"
import dinner from "../../Assets/img/dinner.svg"
import snack from "../../Assets/img/snack.svg"
import pic1 from "../../Assets/img/m01.jpg"
import pic2 from "../../Assets/img/l03.jpg"
import pic3 from "../../Assets/img/d01.jpg"
import pic4 from "../../Assets/img/l01.jpg"
import pic5 from "../../Assets/img/l02.jpg"
import pic6 from "../../Assets/img/d02.jpg"
import pic7 from "../../Assets/img/s01.jpg"
import TagItem from "./TagImage"

const dataMenu = [
	{
		image: pic1,
		text: '05.21 Morning'
	},
	{
		image: pic2,
		text: '05.21 Lunch'
	},
	{
		image: pic3,
		text: '05.21 Dinner'
	},
	{
		image: pic4,
		text: '05.21 Snack'
	},
	{
		image: pic1,
		text: '05.21 Morning'
	},
	{
		image: pic5,
		text: '05.21 Lunch'
	},
	{
		image: pic6,
		text: '05.21 Dinner'
	},
	{
		image: pic7,
		text: '05.21 Snack'
	},
]

const Menu = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="flex justify-evenly py-5 w-3/5">
				<div className="w-40 h-full flex justify-center">
					<img alt="knife" src={knife} />
				</div>
				<div className="w-40 h-full flex justify-center">
					<img alt="lunch" src={lunch} />
				</div>
				<div className="w-40 h-full flex justify-center">
					<img alt="dinner" src={dinner} />
				</div>
				<div className="w-40 h-full flex justify-center">
					<img alt="snack" src={snack} />
				</div>
			</div>

			<div className="w-3/5 grid grid-cols-4 gap-1">
				{
					dataMenu.map((item, idx) => 
						<TagItem key={idx} image={item.image} text={item.text} />
					)
				}
			</div>
		</div>
	)
}
export default Menu