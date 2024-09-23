import styled from "styled-components";

export const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;`

export const StyledBtn = styled.button`
    background-color: ${props => props.color};
    color: #FFFFFF;
    width: 88px;
    height: 30px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
    margin-right: 12px;
    
    
    &:hover {
        background-color: #FFFFFF;
        color: #4E71FE;
        border: 2px solid #4E71FE;
    }
`