import styled from "styled-components";
import FBodyItem from "./FBodyItem";
import Subscribe from "./Subscribe";

const FooterContainer = styled.div``;

const CopyrightMsg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: White;
  width: 100%;
  height: 2.5rem;
  background-color: #7678ed;
`;

const FooterBody = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e8e8fd;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterBody>
        <FBodyItem
          title="Address"
          line1="Madaripur Sadar,"
          line2="Dhaka Bangladesh"
          line3=""
        />

        <Subscribe title="Newsletter" />

        <FBodyItem
          title="Support"
          line1="FAQs"
          line2="Order Tracking"
          line3="Shipping and Returns"
        />
        <FBodyItem
          title="Shop by"
          line1="New Arrival"
          line2="Best Saller"
          line3="Sale Off"
        />
        <FBodyItem
          title="Social Link"
          line1="Facebook"
          line2="Twitter"
          line3="Youtube"
        />
      </FooterBody>
      <CopyrightMsg>&copy; All Right Reserved By Team F</CopyrightMsg>
    </FooterContainer>
  );
};

export default Footer;
