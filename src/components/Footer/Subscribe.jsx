import styled from "styled-components";

const FTitle = styled.h4``;

const SubInput = styled.input`
  min-width: 50px;
  font-size: 1rem;
  height: 2rem;
`;

const SubSubmit = styled.input`
  font-size: 1.2rem;
  color: white;
  height: 2.1rem;
  background-color: #7678ed;
`;

const Subscribe = (props) => {
  return (
    <div>
      <FTitle> {props.title}</FTitle>
      {/* <FaRegPaperPlane /> */}
      <SubInput
        type="search"
        id="subscribe"
        name="subscribe"
        placeholder="Subscribe for best discount and many more"
      />
      <SubSubmit type="submit" value="Subscribe" />
    </div>
  );
};

export default Subscribe;
