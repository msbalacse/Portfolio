import styled from 'styled-components';

interface HomeWrapperTypes {
  backgroundColor: string;
}

const HomeWrapper = styled.section<HomeWrapperTypes>`
  background-color: ${(p) => p.backgroundColor};
  min-height: 100vh;
  position: relative;
`;

export default HomeWrapper;
