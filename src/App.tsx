import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {Forma} from "./components/Forma";
import rectangleImg from './Rectangle 1.png';

function App() {
    return (
        <div className="App">
            {/*<Forma />*/}
            <Box>
                <StyledImage src={rectangleImg} alt="Rectangle Image"/>
                <TextStyledTitle>Headline</TextStyledTitle>
                <TextStyledParagraph>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.</TextStyledParagraph>
                <StyledBtnContainer>
                    <StyledBtn>See more</StyledBtn>
                    <StyledBtn>Save</StyledBtn>
                </StyledBtnContainer>
            </Box>
        </div>
    );
}

const StyledImage = styled.img`
    width: 280px;
    height: 170px;`

const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;`

const StyledBtn = styled.button`
    background-color: #4E71FE;
    color: #FFFFFF;
    width: 86px;
    height: 30px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
    margin-right: 12px;
`;

const TextStyledTitle = styled.h2`
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
    margin-top: 20px;`


const TextStyledParagraph = styled.p`
    font-size: 12px;
    color: #ABB3BA;
    margin-bottom: 20px;
    text-align: left;`

const Box = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    margin: 0 auto;
    padding: 10px;
    width: 300px;
    height: 350px;
    border-radius: 10px;
    background-color: #FFFFFF;
`;

export default App;

