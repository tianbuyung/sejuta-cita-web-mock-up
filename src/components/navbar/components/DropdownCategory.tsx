import { NavDropdown } from "react-bootstrap";

interface DropdownProps {
	category: any;
}

const DropdownCategory = ({ category }: DropdownProps) => {
	return (
		<div>
			{category?.map((item: any) => {
				return (
					<NavDropdown.Item href="#" key={item.id}>
						{item.name}
					</NavDropdown.Item>
				);
			})}
		</div>
	);
};

export default DropdownCategory;
