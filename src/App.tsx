import { Route, Routes } from "react-router-dom";
import routes from "routes";
import BookmarkProvider from "store/BookmarkProvider";

const App = () => {
	return (
		<BookmarkProvider>
			<Routes>
				{routes.map((route) => {
					return (
						<Route key={route.path} path={route.path} element={route.page} />
					);
				})}
			</Routes>
		</BookmarkProvider>
	);
};

export default App;
