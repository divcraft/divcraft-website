import styled from 'styled-components';

export const TitleHeader = styled.h1`
  font-size: 28px;
  color: ${({ color, theme: { colors } }) => {
    if (color === 'blue') return colors.blue.regular;
    if (color === 'yellow') return colors.yellow.regular;
    if (color === 'black') return colors.gray.darker;
    if (color === 'white') return 'white';
    return 'black';
  }};
`;
