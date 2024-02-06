import styled from 'styled-components';

type Props = {
  theme: string;
};

const Paragraph = styled.p<Props>`
  display: flex;
  color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
  line-height: 1.5em;
  padding: 0.5rem 0;
  font-size: 16px;

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export default Paragraph;
