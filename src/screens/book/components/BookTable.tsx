import { useContext } from "react";

import { Button, Card, Col, Row } from "react-bootstrap";
import BookmarkContext from "store/bookmark-context";

const BookTable = ({ books }: BookTableProps) => {
	const bookmarkCtx = useContext(BookmarkContext);

	const addToBookmarkHandler = (item: any) => {
		bookmarkCtx.addItem({
			id: item.id,
			title: item.title,
			authors: item.authors,
		});
	};

	return (
		<Row xs={1} sm={2} lg={3} xl={5} className="g-4 m-5">
			{books?.slice(0, 10).map((item: any) => {
				return (
					<Col key={item?.id}>
						<Card
							style={{
								height: "100%",
							}}
						>
							<Card.Img variant="top" src={item?.cover_url} alt={item?.title} />
							<Card.Body className="text-center">
								<Card.Title style={{ height: "40px" }}>
									{item?.title}
								</Card.Title>
								<Card.Text style={{ height: "50px" }}>
									Authors:{item?.authors}
								</Card.Text>
								<Card.Link href="#">Details</Card.Link>
								<br />
								<Button
									variant="success"
									className="mt-3"
									onClick={() => addToBookmarkHandler(item)}
								>
									<i className="bi bi-bookmark-plus" /> Bookmark
								</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
};

interface BookTableProps {
	books: any;
}

export default BookTable;
