import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Records from './Pages/Records';
import Layout from './Pages/Layout';
import Column from './Pages/Column';
import Home from './Pages/Home';
import { PrivateRoute } from './HOC/privateRouter';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />} >
					<Route path="/"
						element={
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						} />
					<Route path="/record" element={
						<PrivateRoute>
							<Records />
						</PrivateRoute>
					} />
					<Route path="/column" element={<Column />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
