import { useEffect, useState } from "react";
import CategoryService from "services/CategoryService";

const categoryService = new CategoryService();

const useCategory = () => {
	const [getCategory, setGetCategory] = useState([]);

	useEffect(() => {
		const fetchGetCategoryHandler = async () => {
			try {
				const data = await categoryService.getAllCategories();
				setGetCategory(data);
			} catch (error) {
				// silent e
			}
		};

		fetchGetCategoryHandler();
	}, []);

	return {
		category: getCategory,
	};
};

export default useCategory;
