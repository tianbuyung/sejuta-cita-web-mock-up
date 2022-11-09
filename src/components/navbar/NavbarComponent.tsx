import { Container, Navbar, NavDropdown } from "react-bootstrap";

import DropdownCategory from "components/navbar/components";

const NavbarComponent = () => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="/">Sejuta Cita</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<NavDropdown title="Category" id="basic-nav-dropdown">
						<DropdownCategory />
					</NavDropdown>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
