import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import BookService from "services/BookServices";

const bookService = new BookService();
const size = 10;

const useBookPage = () => {
	const [getBooks, setGetBooks] = useState([]);
	const [page, setPage] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const { categoryId } = useParams();

	useEffect(() => {
		const fetchGetCategoryHandler = async () => {
			try {
				const queryTotalPages = `categoryId=${categoryId}&page=0&size=1000`;
				const dataTotalPages = await bookService.getAllBooks(queryTotalPages);
				console.log(dataTotalPages.length);
				setTotalPages(Math.ceil(dataTotalPages.length / size));
				const query = `categoryId=${categoryId}&page=${page}&size=${size}`;
				const data = await bookService.getAllBooks(query);
				setGetBooks(data);
			} catch (error) {
				// silent e
			}
		};

		fetchGetCategoryHandler();
	}, [categoryId, page]);

	return { getBooks, setPage, totalPages };
};

export default useBookPage;
