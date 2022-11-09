import BaseService from "services/BaseService";

class CategoryService extends BaseService {
	getAllCategories = async () => {
		const path = "/fee-assessment-categories";
		const options = {
			method: "GET",
		};

		return await this.fetch({ path, options });
	};
}

export default CategoryService;
