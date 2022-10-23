import styled from "styled-components";

const SearchContainer = styled.div`
  border-radious: 100px;
`;

const SearchForm = styled.form``;
const SearchInput = styled.input`
  min-width: 300px;
  font-size: 1.3rem;
  height: 2rem;
`;

const SearchSubmit = styled.input`
  font-size: 1.2rem;
  color: #7678ed;
  width: 4rem;
`;

const SearchOption = (props) => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput
          type="search"
          id="Search"
          name="wsearch"
          placeholder="Search Watch"
        />
        <SearchSubmit type="submit" value="&#x1F50D;" />
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchOption;
