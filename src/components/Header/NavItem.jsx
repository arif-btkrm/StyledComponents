import styled from "styled-components";

const NavList = styled.h3`
  margin: 0 7px;
  padding: 5px;
  border-radiour: 5px;
  cursor: pointer;
  &:hover {
    color: #7678ed;
    background-color: white;
  }
`;

const NavListWrapper = styled.div``;

const NavItem = (props) => {
  const { title, logo } = props;
  return (
    <NavListWrapper>
      <NavList>
        {title} {logo}
      </NavList>
    </NavListWrapper>
  );
};

export default NavItem;
