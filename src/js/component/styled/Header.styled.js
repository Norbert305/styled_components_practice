import styled from "styled-components";

export const StyledHeader = styled.header`
	background-color: ${({ theme }) => theme.colors.header};
	padding: 40px 0;

	h1 {
		color: red;
	}
	&:hover {
		background-color: black;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Logo = styled.img`
	@media (max-width: 768px) {
		margin-bottom: 40px;
	}
`;

export const Image = styled.img`
	width: 375px;
	margin: 0 30px;
	@media (max-width: 768px) {
		margin: 20px auto;
	}
`;
