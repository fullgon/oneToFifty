import React, { useState } from "react";
import Board from "./Board";
import styled from "styled-components"
import Timer from "./Timer";

let array = [];
for(let i = 1; i <= 25; i++){
    array.push(i);
}

function OneToFifty(){
    const [numbers, setNumbers] = useState(array);
    const [gameFlag, setGameFlag] = useState(false);
    const [current, setCurrent] = useState(1);

    const handleClick = num => {
        if(num === current){
            if(num === 50){
                console.log("끝");
            }
        }
        const index = numbers.indexOf(num);
        setNumbers(numbers => [
            ...numbers.slice(0,index),
            num < 26 ? num+25 : 0,
            ...numbers.slice(index + 1)
        ]);
        setCurrent(current => current + 1);
    }

    const startGame = () => {
        setNumbers(shuffleArray(array));
        setCurrent(1);
        setGameFlag(true);
    };

    const endGame = () => {
        setGameFlag(false);
    };

    return (
        <Container>
            <Board numbers={numbers} handleClick={handleClick}></Board>
            {gameFlag ? (
                <Timer/>
            ) : (
                <StartButton onClick={startGame}>start</StartButton>
            )}
        </Container>
    )
}

const shuffleArray = arry => {
    for(let i = arry.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [arry[i], arry[j]] = [arry[j], arry[i]];
    }
    return arry;
}

const Container = styled.div`
    width: 600px;
    height: 800px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StartButton = styled.button`
    margin-top: 30px;
    width: 100px;
    height: 50px;
`;
export default OneToFifty;