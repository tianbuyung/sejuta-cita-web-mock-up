import classes from "./Body.module.css";

const Body = () => {
	return (
		<div
			className={`${classes["heading_container"]} ${classes["heading_center"]}`}
		>
			<h2>Welcome to Sejuta Cita</h2>
			<p>Please select the "Book Category" menu to start reading!</p>
		</div>
	);
};

export default Body;
