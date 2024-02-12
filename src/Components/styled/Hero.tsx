import styled from 'styled-components';

type Props = {
  theme: string;
};

const Hero = styled.section<Props>`
  background-color: ${(props) => (props.theme === 'dark' ? 'black' : 'white')};
  color: white;
  padding: 2rem 0.5rem;
`;

export default Hero;
