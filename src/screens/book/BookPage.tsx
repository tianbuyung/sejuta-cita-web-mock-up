import { useState } from "react";
import ReactPaginate from "react-paginate";

import useBookPage from "screens/book/useBookPage";
import SearchComponent from "screens/book/components/SearchComponent";
import BookTable from "screens/book/components/BookTable";

const BookPage = () => {
	const { getBooks, setPage, totalPages } = useBookPage();
	const [query, setQuery] = useState<string>("");
	const keys = ["title", "authors"];

	const Search = (getBooks: Array<any>) => {
		return getBooks.filter((item: any) =>
			keys.some((key) => item[key].toString().toLowerCase().includes(query))
		);
	};

	return (
		<>
			<SearchComponent onSetQuery={setQuery} />
			<BookTable books={Search(getBooks)} />
			<ReactPaginate
				pageCount={totalPages}
				pageRangeDisplayed={4}
				marginPagesDisplayed={2}
				onPageChange={({ selected }) => setPage(selected + 1)}
				breakLabel="..."
				nextLabel="next >"
				previousLabel="< previous"
				breakLinkClassName="page-link"
				containerClassName="pagination justify-content-center m-5"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				activeClassName="active"
			/>
		</>
	);
};

export default BookPage;
