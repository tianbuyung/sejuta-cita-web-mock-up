import { Row } from "react-bootstrap";
import ReactPaginate from "react-paginate";

import NavbarComponent from "components/navbar/NavbarComponent";
import useBookPage from "screens/book/useBookPage";

const BookPage = () => {
	const { getBooks, setPage, totalPages } = useBookPage();

	return (
		<>
			<NavbarComponent />
			<Row as={"ul"}>
				{getBooks?.map((item: any) => {
					return (
						<li key={item.id}>
							Title:{item.title}
							<br />
							Authors:{item.authors}
							<br />
							<img src={item.cover_url} alt={item.title} />
							<br />
						</li>
					);
				})}
			</Row>
			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={({ selected }) => setPage(selected + 1)}
				pageRangeDisplayed={5}
				pageCount={totalPages}
				previousLabel="< previous"
				breakLinkClassName={"page-link"}
				containerClassName={"pagination"}
				pageClassName={"page-item"}
				pageLinkClassName={"page-link"}
				previousClassName={"page-item"}
				previousLinkClassName={"page-link"}
				nextClassName={"page-item"}
				nextLinkClassName={"page-link"}
				activeClassName={"active"}
			/>
		</>
	);
};

export default BookPage;
