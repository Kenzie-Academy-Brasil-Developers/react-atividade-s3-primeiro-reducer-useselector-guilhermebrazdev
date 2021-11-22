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

  > div {
    border: 2px solid purple;
    width: 100px;
    background-color: #ffb646;
    color: black;
    font-size: 20px;
    border-radius: 8px;
  }
`;
