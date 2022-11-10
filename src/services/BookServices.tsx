import BaseService from "services/BaseService";

class BookService extends BaseService {
	getAllBooks = async (query: string) => {
		const path = `/fee-assessment-books?${query}`;
		const options = {
			method: "GET",
		};

		return await this.fetch({ path, options });
	};
}

export default BookService;
