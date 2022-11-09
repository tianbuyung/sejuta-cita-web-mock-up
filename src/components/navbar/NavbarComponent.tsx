import { Container, Navbar, NavDropdown } from "react-bootstrap";
import DropdownCategory from "components/navbar/components";

interface NavbarComponentProps {
	category: any;
}

const NavbarComponent = ({ category }: NavbarComponentProps) => {
	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">Sejuta Cita</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<NavDropdown title="Category" id="basic-nav-dropdown">
						<DropdownCategory category={category} />
					</NavDropdown>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
