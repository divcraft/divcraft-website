import styled from 'styled-components';

export const SectionContainer = styled.section`
  display: grid;
  background-color: ${({ theme: { colors } }) => colors.blue};
  background-image: url('/backgrounds/main-bg-mobile.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    background-image: url('/backgrounds/main-bg-desktop.jpg');
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 25px;
  height: 150vw;
  max-height: 800px;
  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    width: 43%;
    height: 40vw;
    transform: translateY(-10px);
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: calc(24px + 40 * ((100vw - 320px) / 680));
  border-bottom: solid 1px white;
  @media (min-width: 768px) {
    font-size: calc(20px + 15 * ((100vw - 320px) / 680));
  }
`;

export const SubTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.yellow};
  font-size: calc(16px + 24 * ((100vw - 320px) / 680));
  @media (min-width: 768px) {
    font-size: calc(12px + 7 * ((100vw - 320px) / 680));
  }
`;
