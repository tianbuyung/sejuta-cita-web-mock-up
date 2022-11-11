import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import DropdownCategory from "components/navbar/components";
import AddBookmarkButton from "screens/bookmark/button";

const NavbarComponent = ({ onShowBookmark }: NavbarComponentProps) => {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Container fluid>
				<Navbar.Brand>Sejuta Cita</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto">
						<LinkContainer to="/">
							<Nav.Link>
								<i className="bi bi-house-door-fill" /> Home
							</Nav.Link>
						</LinkContainer>
						<NavDropdown title="Book Categories" id="basic-nav-dropdown">
							<DropdownCategory />
						</NavDropdown>
					</Nav>
					<AddBookmarkButton onClick={onShowBookmark} />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

interface NavbarComponentProps {
	onShowBookmark: () => void;
}

export default NavbarComponent;
