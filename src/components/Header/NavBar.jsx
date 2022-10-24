import React, { useState } from "react";
import {
  FaBullhorn,
  FaCartPlus,
  FaItchIo,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavList from "./NavList";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  border-radious: 10px;
`;

const MyNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #7678ed;
    background-color: white;
  }
  &.active {
    color: #7678ed;
    background-color: white;
  }
`;

const NavBar = ({ openModal }) => {
  const [login, setLogin] = useState(false);
  // console.log(openModal(true));
  return (
    <NavContainer>
      {/* <NavList title="Home" to="/" logo={<FaHome />} /> */}
      <MyNavLink to="/collections">
        <NavList title="Collections" logo={<FaItchIo />} />
      </MyNavLink>
      <MyNavLink to="/cart">
        <NavList title="Cart" logo={<FaCartPlus />} />
      </MyNavLink>
      <MyNavLink to="/announcement">
        <NavList title="Announcement" logo={<FaBullhorn />} />
      </MyNavLink>
      {login ? (
        <NavContainer>
          <MyNavLink>
            <NavList title="Profile" to="/profile" logo={<FaUserCircle />} />
          </MyNavLink>
          <MyNavLink>
            <NavList title="LogOut" logo={<FaSignOutAlt />} />
          </MyNavLink>
        </NavContainer>
      ) : (
        <MyNavLink onClick={() => openModal(true)}>
          <NavList title="LogIn" logo={<FaSignInAlt />} />
        </MyNavLink>
      )}
    </NavContainer>
  );
};

export default NavBar;
