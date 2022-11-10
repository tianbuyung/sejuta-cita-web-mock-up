import { Button, Card, Col, Row } from "react-bootstrap";

const BookTable = ({ books }: BookTableProps) => {
	return (
		<Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 m-5">
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
								<Button variant="success">Details</Button>
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
