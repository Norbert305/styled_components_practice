import React from "react";
import { NavBar } from "./styled/NavBar.styled";

export const TheNavBar = () => {
	return (
		<div>
			<NavBar>
				<ul>
					<li style={{ float: "left" }}>
						<a href="">
							{" "}
							<h3>Kazmos</h3>{" "}
						</a>
					</li>
					<li>
						<a href="">Talent</a>
					</li>
					<li>
						{" "}
						<a href="">Business</a>
					</li>
					<li>
						{" "}
						<a href="">About Us</a>
					</li>
				</ul>
			</NavBar>
		</div>
	);
};
