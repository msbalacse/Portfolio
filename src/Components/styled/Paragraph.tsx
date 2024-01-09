import styled from 'styled-components';

const Paragraph = styled.p`
  display: flex;
  color: black;
  line-height: 1.5em;
  padding: 1rem;
  font-size: 16px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export default Paragraph;
