import styled from 'styled-components';
import { secondBg } from './colors';

export const HeaderStyle = styled.header`
  background-color: ${ secondBg };
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;

  h1 {
    margin-left: 5%;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-right: 5%;

    div {
      flex-direction: row;
    }
  }
`;
