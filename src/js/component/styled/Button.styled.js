import styled from "styled-components";

export const Button = styled.button`

border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
curser: pointer;
font-size: 16px;
font-weight: 700;
padding: 15px 60px;
margin: 0 40px;
background-color: ${({ bg }) => bg || "#fff"}
background-color: ${({ color }) => color || "#333"}

&:hover {
    opacity: 0.9
    transform: scale(0.98);
}
`;
