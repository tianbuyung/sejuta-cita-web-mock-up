import classes from "./BookmarkItem.module.css";

const BookmarkItem = (props: any) => {
	return (
		<li className={classes["bookmark-item"]}>
			<div>
				<h2>{props.title}</h2>
				<div className={classes.summary}>
					<span className={classes.authors}>{props.authors}</span>
				</div>
			</div>
			<div className={classes.actions}>
				<button onClick={props.onRemove}>-</button>
			</div>
		</li>
	);
};

export default BookmarkItem;
