import styled from 'styled-components';

export const Page = styled.main`
  margin-left: ${(props) => (props.clicked ? "0" : "250px")};
  transition: all 0.5s;
`;

export const PageContent = styled.div`
  width: auto;
  margin-lef: auto;
  margin-right: auto;
`;