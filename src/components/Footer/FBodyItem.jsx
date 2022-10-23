import styled from "styled-components";

const FTitle = styled.h4``;

const FDetails = styled.p``;

const FBodyItem = (props) => {
  return (
    <div>
      <FTitle> {props.title}</FTitle>
      <FDetails>{props.line1}</FDetails>
      <FDetails>{props.line2}</FDetails>
      <FDetails>{props.line3}</FDetails>
    </div>
  );
};

export default FBodyItem;
