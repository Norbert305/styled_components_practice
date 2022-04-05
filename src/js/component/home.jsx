import React from "react";
import { Container } from "./styled/Container.styled";
import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/Global";
import { TheNavBar } from "./TheNavBar";

//include images into your bundle

//create your first component

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
	mobile: "768px",
};

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<TheNavBar />
				<GlobalStyles />
				<Header />
				<Container className="text-center">
					<h1>Hello World</h1>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default Home;
