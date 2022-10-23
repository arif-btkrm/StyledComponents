// import { FiWatch } from "react-icons/fi";
import { BsWatch } from "react-icons/bs";
import styled from "styled-components";
const LogoContainer = styled.h1`
  color: White;
`;

const BrandLogo = (props) => {
  return (
    <LogoContainer>
      <BsWatch /> Watch Store
    </LogoContainer>
  );
};

export default BrandLogo;
