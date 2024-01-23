import React from 'react'
import styled from 'styled-components';

const StyledText = styled.div`
    color: #141619;
    font-family: "SF Pro Text";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.5px;
    letter-spacing: -0.3px;
    width: 311px;
    text-align: left;
`;

export const Text: React.FC<{text : string}> = (props) => (
    <StyledText data-testid="text">{props.text}</StyledText>
)
