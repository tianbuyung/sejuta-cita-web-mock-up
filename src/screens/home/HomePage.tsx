import { useEffect, useState } from "react";
import NavbarComponent from "components/navbar";
import BookPage from "screens/book/BookPage";
import CategoryService from "services/CategoryService";
import BookService from "services/BookServices";

const categoryService = new CategoryService();
const bookService = new BookService();

function HomePage() {
	const [getCategory, setGetCategory] = useState([]);
	const [getBooks, setGetBooks] = useState([]);

	useEffect(() => {
		const fetchGetCategoryHandler = async () => {
			try {
				const data = await categoryService.getAllCategories();
				setGetCategory(data);
			} catch (error) {
				// silent e
			}
		};

		fetchGetCategoryHandler();
	}, []);

	useEffect(() => {
		const fetchGetCategoryHandler = async () => {
			try {
				const query = "categoryId=1&page=0&size=10";
				const data = await bookService.getAllBooks(query);
				console.log(data);
				setGetBooks(data);
			} catch (error) {
				// silent e
			}
		};

		fetchGetCategoryHandler();
	}, []);

	return (
		<>
			<NavbarComponent category={getCategory} />
			<BookPage books={getBooks} />
		</>
	);
}

export default HomePage;
