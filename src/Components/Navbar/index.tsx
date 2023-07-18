import ItemMenu from "../ItemMenu"
import logo from "../../Assets/img/logo.svg"
import './navbar.scss'
import info from '../../Assets/icon/icon_info.svg'
import challenge from '../../Assets/icon/icon_challenge.svg'
import memo from '../../Assets/icon/icon_memo.svg'
import menu from '../../Assets/icon/icon_menu.svg'
import count from '../../Assets/icon/info_count.svg'

import MenuDialog from "./MenuDialog"
import { useState } from "react"

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const dataNavbar = [
		{
			icon: memo,
			text: '自分の記録',
			link: '/record',
		},
		{
			icon: challenge,
			text: 'チャレンジ',
			link: '',
		},
		{
			icon: info,
			text: 'お知らせ',
			link: '',
			ping: count
		},
	]

	return (
		<div className="flex black-background fixed w-full top-0 z-50">
			<div className="w-1/2 flex justify-center p-3 logo">
				<img alt="" src={logo} />
			</div>
			<div className="menu flex">
				{
					dataNavbar.map((item, idx) =>
						<ItemMenu key={idx} icon={item.icon} text={item.text} link={item.link} ping={item.ping} />
					)
				}
				<button onClick={() => setShowMenu(!showMenu)} >
					<ItemMenu icon={menu} />
				</button>
			</div>

			<MenuDialog show={showMenu} changeStatusShow={(show: boolean) => setShowMenu(show)} />
		</div>
	)
}

export default Navbar