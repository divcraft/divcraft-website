import styled from 'styled-components';

export const TitleHeader = styled.h1`
  font-size: 28px;
  color: ${({ color, theme: { colors } }) => {
    if (color === 'blue') return colors.blue;
    if (color === 'yellow') return colors.yellow;
    if (color === 'black') return 'black';
    return 'black';
  }};
`;
