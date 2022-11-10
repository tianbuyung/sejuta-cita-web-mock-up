import { useContext } from "react";
import BookmarkContext from "store/bookmark-context";
import classes from "./AddBookmarkButton.module.css";

const AddBookmarkButton = ({ onClick }: any) => {
	const bookmarkCtx = useContext(BookmarkContext);

	const { items } = bookmarkCtx;

	const numberOfBookItems = items.length;

	return (
		<button className={classes.button} onClick={onClick}>
			<span className={classes.icon}>
				<i className="bi bi-bookmark-heart" />
			</span>
			<span>Your Book</span>
			<span className={classes.badge}>{numberOfBookItems}</span>
		</button>
	);
};

export default AddBookmarkButton;
