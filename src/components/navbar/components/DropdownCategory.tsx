import useCategory from "hooks/category/useCategory";
import { NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const DropdownCategory = () => {
	const { category } = useCategory();

	return (
		<div>
			{category?.map((item: any) => {
				return (
					<LinkContainer key={item.id} to={`/category/${item?.id}`}>
						<NavDropdown.Item>{item.name}</NavDropdown.Item>
					</LinkContainer>
				);
			})}
		</div>
	);
};

export default DropdownCategory;
