import { Button, Container, Form } from "react-bootstrap";

const SearchComponent = ({ onSetQuery }: SearchComponentProps) => {
	const searchChangeHandler = (e: any) =>
		onSetQuery(e.target.value.toLowerCase());

	return (
		<Container className="my-5 justify-content-center">
			<Form className="d-flex">
				<Form.Control
					type="search"
					placeholder="Search your books by title or authors"
					className="me-2"
					aria-label="Search"
					onChange={searchChangeHandler}
				/>
				<Button variant="outline-success">Search</Button>
			</Form>
		</Container>
	);
};

interface SearchComponentProps {
	onSetQuery: any;
}

export default SearchComponent;
