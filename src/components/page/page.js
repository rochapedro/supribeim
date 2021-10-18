import styled from 'styled-components';

const Page = styled.main`
  margin-left: ${(props) => (props.clicked ? "0" : "250px")};
  transition: all 0.5s;
`;

export default Page;