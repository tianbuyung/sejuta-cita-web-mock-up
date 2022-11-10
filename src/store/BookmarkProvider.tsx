import { useReducer } from "react";

import BookmarkContext from "./bookmark-context";

const defaultBookmarkState = {
	items: [],
};

const bookmarkReducer = (state: any, action: any) => {
	if (action.type === "ADD") {
		const existingBookmarkItemIndex = state.items.findIndex(
			(item: any) => item.id === action.item.id
		);

		let updatedItems;

		if (existingBookmarkItemIndex >= 0) {
			updatedItems = state.items;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			items: updatedItems,
		};
	}

	if (action.type === "REMOVE") {
		const updatedItems = state.items.filter(
			(item: any) => item.id !== action.id
		);

		return {
			items: updatedItems,
		};
	}

	if (action.type === "CLEAR") {
		return defaultBookmarkState;
	}

	return defaultBookmarkState;
};

const BookmarkProvider = (props: any) => {
	const [bookmarkState, dispatchBookmarkAction] = useReducer(
		bookmarkReducer,
		defaultBookmarkState
	);

	const addItemToBookmarkHandler = (item: any) => {
		dispatchBookmarkAction({ type: "ADD", item: item });
	};

	const removeItemFromBookmarkHandler = (id: number) => {
		dispatchBookmarkAction({ type: "REMOVE", id: id });
	};

	const clearBookmarkHandler = () => {
		dispatchBookmarkAction({ type: "CLEAR" });
	};

	const bookmarkContext = {
		items: bookmarkState.items,
		addItem: addItemToBookmarkHandler,
		removeItem: removeItemFromBookmarkHandler,
		clearBookmark: clearBookmarkHandler,
	};

	return (
		<BookmarkContext.Provider value={bookmarkContext}>
			{props.children}
		</BookmarkContext.Provider>
	);
};

export default BookmarkProvider;
