import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${({ color, theme: { colors } }) => {
    if (color === 'blue') return colors.blue.regular;
    if (color === 'yellow') return colors.yellow.regular;
    if (color === 'white') return 'white';
    if (color === 'black') return 'black';
    return 'black';
  }};
`;
