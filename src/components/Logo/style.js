import styled from 'styled-components';

export const ShadowContainer = styled.div`
  filter: drop-shadow(-1px 5px 3px rgba(50, 50, 0, 0.3));
  position: absolute;
  top: 0;
  left: 0;
`;

export const LogoContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.blue.sky};
  height: 70px;
  min-width: 245px;
  width: 40vw;
  max-width: 640px;
  clip-path: polygon(0% 0%, 100% 0%, calc(100% - 70px) 100%, 0% 100%);
  & > a {
    margin-left: 2.5vw;
  }
`;

export const LogoImg = styled.img`
  height: 30px;
  margin-top: 20px;
`;
