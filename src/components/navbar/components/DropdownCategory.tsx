import useCategory from "hooks/category/useCategory";
import { NavDropdown } from "react-bootstrap";

const DropdownCategory = () => {
	const { category } = useCategory();

	return (
		<div>
			{category?.map((item: any) => {
				return (
					<NavDropdown.Item href={`/category/${item?.id}`} key={item.id}>
						{item.name}
					</NavDropdown.Item>
				);
			})}
		</div>
	);
};

export default DropdownCategory;
