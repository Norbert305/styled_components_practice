import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";
import { Button } from "./styled/Button.styled";
import { Flex } from "./styled/Flex.styled";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo
						src="https://www.looper.com/img/gallery/heres-how-long-keanu-reeves-said-hell-play-john-wick-for/intro-1598907086.jpg"
						alt=""
					/>
					<Button>Click Me</Button>
				</Nav>
				<Flex>
					<div>
						<h1>John Whick can't be stopped!</h1>
						<p>
							Hello World. This is my styled compenent projcet
							that I am working on for fun!!! John Whick is
							unbeatable!!!!!
						</p>
						<Image
							src="https://i.pinimg.com/originals/e5/03/a5/e503a5826dbaf79463f587bf2d9c8d59.png"
							alt="charizard"
						/>
						<button
							style={{
								backgroundColor: "pink",
								color: "white",
								borderRadius: "10px",
							}}>
							Getting Started For Free
						</button>
					</div>
				</Flex>
			</Container>
		</StyledHeader>
	);
};
