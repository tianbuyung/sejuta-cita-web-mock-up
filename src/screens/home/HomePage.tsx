import NavbarComponent from "components/navbar";
import { useState } from "react";
import BookmarkPage from "screens/bookmark/page/BookmarkPage";
import Body from "screens/home/components";

function HomePage() {
	const [bookmarkIsShown, setBookmarkIsShown] = useState(false);

	const showBookmarkHandler = () => {
		setBookmarkIsShown(true);
	};

	const hideBookmarkHandler = () => {
		setBookmarkIsShown(false);
	};

	return (
		<>
			{bookmarkIsShown && <BookmarkPage onClose={hideBookmarkHandler} />}
			<NavbarComponent onShowBookmark={showBookmarkHandler} />
			<Body />
		</>
	);
}

export default HomePage;
