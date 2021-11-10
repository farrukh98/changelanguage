import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ mode }) => (mode ? "white" : "black")};
`;
