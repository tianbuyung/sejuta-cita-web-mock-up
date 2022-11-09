import classes from "./Body.module.css";

const Body = () => {
	return (
		<div
			className={`${classes["heading_container"]} ${classes["heading_center"]}`}
		>
			<h2>Welcome to Sejuta Cita</h2>
			<p>
				There are many variations of passages of Lorem Ipsum available, but the
				majority have suffered alteration
			</p>
		</div>
	);
};

export default Body;
