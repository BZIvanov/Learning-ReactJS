import styled from 'styled-components'; // 5.2.1

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
`;

export const Loading = styled.div`
  width: 200px;
  margin: 20px auto;
  text-align: center;
`;
