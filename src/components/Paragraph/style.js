import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ color, theme: { colors } }) => {
    if (color === 'blue') return colors.blue;
    if (color === 'yellow') return colors.yellow;
    if (color === 'white') return 'white';
    if (color === 'black') return 'black';
    return 'black';
  }};
`;
