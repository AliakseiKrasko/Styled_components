import React from 'react';
import './App.css';
import styled from "styled-components";
import rectangleImg from './Rectangle 1.png';
import {StyledImage} from "./components/StyledImage";
import {StyledBtn, StyledBtnContainer} from "./components/StyledBtnContainer";
import {TextStyledParagraph, TextStyledTitle} from "./components/TextStyled";

function App() {
    return (
        <div className="App">
            {/*<Forma />*/}
            <Box>
                <StyledImage src={rectangleImg} alt="Rectangle Image"/>
                <TextStyledTitle>Headline</TextStyledTitle>
                <TextStyledParagraph fontSize='12px' color='#ABB3B'>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                    venen.</TextStyledParagraph>
                <StyledBtnContainer>
                    <StyledBtn btnType='primary'>See more</StyledBtn>
                    <StyledBtn btnType='outlined' active>Save</StyledBtn>
                </StyledBtnContainer>
            </Box>
        </div>
    );
}


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
    
    button {
        cursor: pointer;
    }
`

export default App;

