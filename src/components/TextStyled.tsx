import styled from "styled-components";

type StyleTextProps = {
    text?: string;
    fontSize?: string;
    color?: string;
}

export const TextStyledTitle = styled.h2<StyleTextProps>`
    font-size: ${props => props.fontSize || "16px"};
    font-weight: bold;
    color: ${props => props.color || '#333333'};
    margin-bottom: 20px;
    margin-top: 20px;`
export const TextStyledParagraph = styled.p<StyleTextProps>`
    font-size: ${props => props.fontSize || "12px"};
    color: ${props => props.color || '#ABB3BA'};
    margin-bottom: 20px;
    text-align: left;`