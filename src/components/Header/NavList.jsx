// import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavItem = styled.h3`
  margin: 0 7px;
  padding: 5px;
`;

const NavListWrapper = styled.div`
  border-radius: 10px;
`;

const NavList = (props) => {
  const { title, to, logo } = props;
  return (
    <NavListWrapper>
      {/* <MyNavLink to={to}> */}
      <NavItem>
        {title} {logo}
      </NavItem>
      {/* </MyNavLink> */}
    </NavListWrapper>
  );
};

export default NavList;
