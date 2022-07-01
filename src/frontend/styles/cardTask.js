import styled from 'styled-components';
import { secondBg, detail } from './colors';

export const CardCreate = styled.div`
  border: solid ${ secondBg } 1px;
  display: flex;
  flex-direction: column;
  margin: 1%;
  width: 20%;
  text-align: center;

  h3 {
    color: ${ secondBg };
    margin-left: 5%;
  }

  input {
    border: none;
    height: 40px;
    margin-bottom: 15px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  button {
    background-color: ${ secondBg };
    border: none;
    color: white;
    height: 50px;
    margin-bottom: 25px;
    margin-left: 5%;
    margin-right: 5%;
  }

  button:active {
    background-color: ${ detail };
  }
`;
