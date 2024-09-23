import styled, {css} from "styled-components";

type StyledBtnProps = {
    color?: string;
    primary?: boolean,
    outlined?: boolean
    btnType?: "primary" | "outlined"
    active?: boolean;
}

export const StyledBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;`

export const StyledBtn = styled.button<StyledBtnProps>`
    background-color: ${props => props.color || '#4E71FE'};

    width: 88px;
    height: 30px;
    padding: 10px 20px;

    border-radius: 5px;
    font-size: 10px;
    font-weight: bold;
    margin-right: 12px;


    
    
    ${props => props.active && css<StyledBtnProps>`
        box-shadow: 5px 5px 5px #5b5e81;
    `}

    ${props => props.btnType === 'primary' && css<StyledBtnProps>`
        border: none;
        font-size: 10px;
        color: ${props => props.color || '#FFFFFF'};
        background-color: ${props => props.color || '#4E71FE'};

        &:hover {
            background-color: #FFFFFF;
            color: #4E71FE;
            border: 2px solid #4E71FE;
        }
    `}
    ${props => props.btnType === 'outlined' && css<StyledBtnProps>`
        border: 2px solid ${props => props.color || '#4E71FE'};
        color: ${props => props.color || '#4E71FE'};
        background-color: ${props => props.color || '#FFFFFF'};
    `}
`
