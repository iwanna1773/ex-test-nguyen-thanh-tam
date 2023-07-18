import './footer.scss'

const footerData = [
	{
		text: '会員登録'
	},
	{
		text: '運営会社'
	},
	{
		text: '利用規約'
	},
	{
		text: '個人情報の取扱について'
	},
	{
		text: '特定商取引法に基づく表記'
	},
	{
		text: 'お問い合わせ'
	},
]

const Footer = () => {
	return (
		<div className="fixed bottom-0 w-full bg-white z-50">
			<div className='footer h-32 w-full bg-black text-white flex items-center '>
				{
					footerData.map((item, idx) =>
						<p key={idx}>{item.text}</p>
					)
				}
			</div>
		</div>
	)
}

export default Footer