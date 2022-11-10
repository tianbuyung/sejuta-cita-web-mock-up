import { useContext } from "react";

import Modal from "components/modal";
import classes from "./BookmarkPage.module.css";
import BookmarkContext from "store/bookmark-context";
import BookmarkItem from "screens/bookmark/page/components/BookmarkItem";

const BookmarkPage = ({ onClose }: any) => {
	const bookmarkCtx = useContext(BookmarkContext);

	const bookmarkItemRemoveHandler = (id: number) => {
		bookmarkCtx.removeItem(id);
	};

	const bookmarkItemClearHandler = () => {
		bookmarkCtx.clearBookmark();
	};

	const bookmarkItems = (
		<ul className={classes["bookmark-items"]}>
			{bookmarkCtx.items.map((item: any) => (
				<BookmarkItem
					key={item.id}
					title={item.title}
					authors={item.authors}
					onRemove={bookmarkItemRemoveHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	return (
		<Modal onClose={onClose}>
			{bookmarkItems}
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={onClose}>
					Close
				</button>
				<button
					className={classes["button"]}
					onClick={bookmarkItemClearHandler}
				>
					Clear
				</button>
			</div>
		</Modal>
	);
};

export default BookmarkPage;
