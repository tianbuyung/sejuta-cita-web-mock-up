import { useEffect, useState } from "react";

import BookService from "services/BookServices";

const bookService = new BookService();

const useBookPage = ({ query }: useBookPageProps) => {
	const [getBooks, setGetBooks] = useState([]);

	useEffect(() => {
		const fetchGetCategoryHandler = async () => {
			try {
				const data = await bookService.getAllBooks(query);
				setGetBooks(data);
			} catch (error) {
				// silent e
			}
		};

		fetchGetCategoryHandler();
	}, [query]);

	return { getBooks };
};

interface useBookPageProps {
	query: string;
}

export default useBookPage;
