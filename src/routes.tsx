import BookPage from "screens/book";
import ErrorPage from "screens/error";
import HomePage from "screens/home";

const routes = [
	{
		path: "/",
		page: <HomePage />,
	},
	{
		path: "/category/:categoryId",
		page: <BookPage />,
		errorElement: <ErrorPage />,
	},
];

export default routes;
