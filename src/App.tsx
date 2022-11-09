import { Route, Routes } from "react-router-dom";
import routes from "routes";

const App = () => {
	return (
		<Routes>
			{routes.map((route) => {
				return (
					<Route key={route.path} path={route.path} element={route.page} />
				);
			})}
		</Routes>
	);
};

export default App;
