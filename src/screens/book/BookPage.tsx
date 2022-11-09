import { useParams } from "react-router-dom";
import useBookPage from "screens/book/useBookPage";

const BookPage = () => {
	const { categoryId } = useParams();
	const query = `categoryId=${categoryId}&page=0&size=10`;
	const { getBooks } = useBookPage({ query });

	return (
		<div>
			<ul>
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
			</ul>
		</div>
	);
};

export default BookPage;
