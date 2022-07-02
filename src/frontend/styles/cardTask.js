import styled from 'styled-components';
import { secondBg, detail } from './colors';

export const CardCreate = styled.div`
  border: solid ${ secondBg } 1px;
  display: flex;
  flex-direction: column;
  margin: 1%;
  width: 22%;
  height: 220px;
  text-align: center;

  h3 {
    color: ${ secondBg };
    margin-left: 5%;
  }

  input {
    border: none;
    height: 60px;
    margin-bottom: 15px;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }

  button {
    background-color: ${ secondBg };
    border: none;
    color: white;
    height: 70px;
    margin-bottom: 25px;
    margin-left: 5%;
    margin-right: 5%;
  }

  button:active {
    background-color: ${ detail };
  }
`;

export const Task = styled.div`
  border: solid ${ secondBg } 1px;
  display: flex;
  flex-direction: column;
  height: 220px;
  margin: 1%;
  width: 22%;
  text-align: center;
  justify-content: center;
  
  #title {
    color: ${ secondBg };
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 6%;
    margin-right: 5%;

    h3 {
      margin-bottom: 0;
    }
  }

  #second-line {
    display: flex;
    margin: 0 7% 0 4%;

    select {
      border: none;
      text-align: center;
    }
    
    button {
      background-color: ${ secondBg };
      border: none;
      color: white;
      height: 50px;
      width: 50%;
      margin-left: 5px;

      img {
        height: 85%;
        width: 55%;
      }
    }

    button:active {
      background-color: ${ detail };
    }
  }
`;
