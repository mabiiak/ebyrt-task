import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: #292929;
  color: white;
  display: flex;
  justify-content: space-between;
  letter-spacing: 15px;
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
