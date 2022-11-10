import React from "react";

const BookmarkContext = React.createContext({
	items: [],
	addItem: (item: any) => {},
	removeItem: (id: number) => {},
	clearBookmark: () => {},
});

export default BookmarkContext;
