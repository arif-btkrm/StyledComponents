import React, { useState } from "react";
import {
  FaBullhorn,
  FaCartPlus,
  FaItchIo,
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import styled from "styled-components";
import NavItem from "./NavItem";

const NavContainer = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
`;

const NavBar = ({ openModal }) => {
  const [login, setLogin] = useState(false);
  // console.log(openModal(true));
  return (
    <NavContainer>
      <NavItem title="Collections" logo={<FaItchIo />} />
      <NavItem title="Cart" logo={<FaCartPlus />} />
      <NavItem title="Announcement" logo={<FaBullhorn />} />
      {login ? (
        <NavContainer>
          <NavItem title="Profile" logo={<FaUserCircle />} />
          <NavItem title="LogOut" logo={<FaSignOutAlt />} />
        </NavContainer>
      ) : (
        <NavItem
          onClick={() => console.log("LogIn Called")}
          title="LogIn"
          logo={<FaSignInAlt />}
        />
        // <button onClick={() => openModal(true)}>
        //   Login <FaSignInAlt />
        // </button>
      )}
    </NavContainer>
  );
};

export default NavBar;
