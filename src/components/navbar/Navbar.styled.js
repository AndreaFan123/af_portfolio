import styled from "styled-components";
import { COLORS } from "../../constants";

export const NavWrapper = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 20px;
  border-bottom: 3px solid #232946;

  div {
    font-size: 2rem;
    font-weight: 700;
    color: #232946;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const LinkWrapper = styled.div`
  background-color: ${({ isActive }) =>
    !isActive ? `transparent` : "#232946"};
  box-shadow: 5px -3px 0px rgb(200, 200, 200);
  transition: all 0.3s ease;

  a {
    padding: 10px;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${({ isActive }) => (!isActive ? "#232946" : "#e78fb3")};
  }
`;
