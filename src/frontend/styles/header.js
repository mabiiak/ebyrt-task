import styled from 'styled-components';
import { secondBg, detail } from './colors';

export const HeaderStyle = styled.header`
  background-color: ${ secondBg };
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;

  h1 {
    margin-left: 1%;
  }

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    margin-right: 1%;

    div {
      flex-direction: row;

      button {
        border: none;
        background-color: ${ secondBg };
        color: white;
        height: 30px;
        margin-left: 5px;
        text-align: center;
        width: 120px;
      }

      button:active {
      background-color: ${ detail };
    }
    }
  }
`;
