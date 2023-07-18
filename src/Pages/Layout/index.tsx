import { useState } from "react"
import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import scroll from "../../Assets/icon/component_scroll.svg"

const Layout = () => {
	const [isShow, setIsShow] = useState(false);

	window.addEventListener('scroll', () => {
		if (window.scrollY > 200 && !isShow) {
			setIsShow(true)
		}

		if (window.scrollY <= 200) {
			setIsShow(false)
		}
	})

	return (
		<>
			<Navbar />
			<Footer />

			{
				isShow ?
					<button className="fixed right-20 top-50pc" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
						<img alt="scroll" src={scroll} />
					</button> : ''
			}
			<Outlet />
		</>
	)
}

export default Layout	