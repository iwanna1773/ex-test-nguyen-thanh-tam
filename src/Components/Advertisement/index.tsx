import AdItem from "./AdItem"
import Recommend from "./Recommend"
import pic1 from "../../Assets/img/column-1.jpg"
import pic2 from "../../Assets/img/column-2.jpg"
import pic3 from "../../Assets/img/column-3.jpg"
import pic4 from "../../Assets/img/column-4.jpg"
import pic5 from "../../Assets/img/column-5.jpg"
import pic6 from "../../Assets/img/column-6.jpg"
import pic7 from "../../Assets/img/column-7.jpg"
import pic8 from "../../Assets/img/column-8.jpg"

const dataTitle = [
	{
		title: 'RECOMMENDED COLUMN',
		description: 'オススメ'
	},
	{
		title: 'RECOMMENDED DIET',
		description: 'ダイエット'
	},
	{
		title: 'RECOMMENDED BEAUTY',
		description: '美容'
	},
	{
		title: 'RECOMMENDED HEALTH',
		description: '健康'
	},
]

const dataAdItems = [
	{
		image: pic1,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic2,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic3,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic4,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ TESTING TESTING ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic5,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic6,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic7,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
	{
		image: pic8,
		text: '2021.05.17 23:25',
		description: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ 魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ',
		hashtag: ['#魚料理', '#和食', '#DHA'],
	},
]

const Advertisement = () => {
	return (
		<div className="flex flex-col items-center my-3">
			<div className='w-3/5 grid grid-cols-4 gap-2 text-center'>
				{
					dataTitle.map((item, idx) =>
						<Recommend key={idx} title={item.title} description={item.description} />
					)
				}
			</div>

			<div className='w-3/5 grid grid-cols-4 gap-2 mt-10'>
				{
					dataAdItems.map((item, idx) =>
						<AdItem key={idx} image={item.image} text={item.text} description={item.description} hashtag={item.hashtag} />
					)
				}
			</div>
		</div>
	)
}

export default Advertisement