import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffee41;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 2px goldenrod solid;
  border-radius: 8px;

  input {
    height: 20px;
    border-radius: 8px;
    text-align: center;
  }

  button {
    border: 0;
    background: #f3cb78;
    border-radius: 8px;
    cursor: pointer;
    margin: 4px;

    :hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  }

  > section {
    overflow-y: scroll;

    div {
      margin: 10px;
      border: 2px solid purple;
      width: 100px;
      background-color: #ffb646;
      color: black;
      font-size: 20px;
      border-radius: 8px;
    }
  }
`;
