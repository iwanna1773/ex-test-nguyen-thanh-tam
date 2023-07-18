import '../navbar.scss'
import close from '../../../Assets/icon/icon_close.svg'
import { useNavigate } from "react-router-dom"

interface IMenuDialog {
	show: boolean,
	changeStatusShow: (show: boolean) => any
}

const dataOptions = [
	{
		content: '自分の記録',
		link: '/record',
	},
	{
		content: '体重グラフ',
		link: 'graph',
	},
	{
		content: '目標',
		link: 'top',
	},
	{
		content: '選択中のコース',
		link: '',
	},
	{
		content: 'コラム一覧',
		link: '/column',
	},
	{
		content: '設定',
		link: '',
	},
]

const MenuDialog = (props: IMenuDialog) => {
	const { show, changeStatusShow } = props
	const navigate = useNavigate()

	const handleAction = (value: any) => {
		changeStatusShow(false);

		switch (value) {
			case '/record':
			case '/column':
				navigate(value)
				break
			case 'graph':
				navigate('/record')
				window.scrollTo({ top: 270, behavior: 'smooth' })
				break
			case 'top':
				navigate('/')
				window.scrollTo({ top: 0, behavior: 'smooth' })
				break
			default:
				break
		}
	}

	return (
		<>
			{show && <div className='absolute w-56 top-12 right-71 flex flex-col delay-100'>
				<button className='w-6 h-6 right bg-black ml-auto' onClick={() => changeStatusShow(false)}>
					<img alt="close" src={close} />
				</button>
				<div className="w-full h-fit gray-background text-white cursor-pointer">
					{
						dataOptions.map((item, idx) =>
							<button key={idx} className="h-14 w-full flex items-center pl-8" onClick={() => handleAction(item.link)}>{item.content}</button>
						)
					}
				</div>
			</div>}
		</>
	)
}

export default MenuDialog