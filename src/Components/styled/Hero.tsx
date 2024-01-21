import styled from 'styled-components';

type Props = {
  theme: string;
};
const Hero = styled.section<Props>`
  background-color: ${(props) =>
    props.theme === 'dark' ? 'black' : 'var(--primary-color)'};
  color: white;
  padding: 0.5rem;
  min-height: 100vh;
`;

export default Hero;
