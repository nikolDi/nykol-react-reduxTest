import React from "react";
import { Link } from "react-router-dom";

const Redirect = ({ link, data, children }) => (
	<Link
		to={{
			pathname: link,
			state: data,
		}}
	>
		{children}
	</Link>
);

export default Redirect;
