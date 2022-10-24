import styled from "styled-components";
import BrandLogo from "./BrandLogo";
import NavBar from "./NavBar";
import SearchOption from "./SearchOption";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: White;
  width: 100%;
  height: 5rem;
  background-color: #7678ed;
`;

const Header = ({ modalController }) => {
  // console.log("Header Called");
  // console.log(modalController);
  return (
    <HeaderContainer>
      <BrandLogo />
      <SearchOption />
      <NavBar openModal={modalController} />
    </HeaderContainer>
  );
};

export default Header;
