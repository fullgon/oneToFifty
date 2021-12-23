import React from "react";
import Cell from "./Cell";
import styled from "styled-components";

function Board({numbers, handleClick}){
    return(
        <Container>
            {numbers.map((number, index) => (
                <Cell num={number} key={index} handleClick={handleClick}></Cell>
            ))}
        </Container>
    )
}

const Container = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
`;

export default Board;