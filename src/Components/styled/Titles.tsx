import styled from 'styled-components';

type Props = {
  theme: string;
};

const TitleSmall = styled.h1`
  font-size: 2rem;
  font-weight: bolder;
  color: black;
`;

const TitleLarge = styled.h1<Props>`
  font-size: 4rem;
  font-weight: bolder;
  color: ${(props) =>
    props.theme === 'light' ? 'var(--primary-color)' : 'white'};
`;

export { TitleSmall, TitleLarge };
