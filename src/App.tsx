import NavbarComponent from "components/navbar/NavbarComponent";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import BookmarkPage from "screens/bookmark/page/BookmarkPage";
import BookmarkProvider from "store/BookmarkProvider";

const App = () => {
	const [bookmarkIsShown, setBookmarkIsShown] = useState<boolean>(false);

	const showBookmarkHandler = () => {
		setBookmarkIsShown(true);
	};

	const hideBookmarkHandler = () => {
		setBookmarkIsShown(false);
	};

	return (
		<BookmarkProvider>
			{bookmarkIsShown && <BookmarkPage onClose={hideBookmarkHandler} />}
			<NavbarComponent onShowBookmark={showBookmarkHandler} />
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
