import React from "react";
import { Container } from "./styled/Container.styled";
import { Header } from "./Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styled/Global";

//include images into your bundle

//create your first component

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
};

const Home = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<GlobalStyles />
				<Header />
				<Container>
					<h1>Hello World</h1>
				</Container>
			</div>
		</ThemeProvider>
	);
};

export default Home;
