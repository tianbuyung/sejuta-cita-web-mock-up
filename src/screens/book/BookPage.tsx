interface BookPageProps {
	books: any;
}

const BookPage = ({ books }: BookPageProps) => {
	return (
		<div>
			<ul>
				{books?.map((item: any) => {
					return (
						<li key={item.id}>
							Title:{item.title}
							<br />
							Authors:{item.authors}
							<br />
							<img src={item.cover_url} alt={item.title} />
							<br />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BookPage;
