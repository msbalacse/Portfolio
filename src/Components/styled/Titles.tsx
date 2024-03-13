import styled from 'styled-components';

type Props = {
  theme: string;
};

const TitleSmall = styled.h1<Props>`
  font-size: 3rem;
  color: ${(props) =>
    props.theme === 'light' ? 'var(--primary-color)' : 'white'};
  text-shadow: ${(props) =>
    props.theme === 'light' ? 'none' : '2px 1px 1px var(--primary-color) '};
`;
/* box-shadow: ${(props) => 
    // props.theme === 'light' ? 'none' : '2px 2px 2px 2px var(--primary-color)'};*/

const TitleLarge = styled.h1<Props>`
  font-size: 4rem;
  font-weight: bolder;
  color: ${(props) =>
    props.theme === 'light' ? 'var(--primary-color)' : 'white'};
`;

export { TitleSmall, TitleLarge };
