import React from 'react'
import styled from 'styled-components';

const StyledImage = styled.img`
    border-radius: 55px;
    width: 55px;
    height: 55px;
    cover no-repeat;
    flex-shrink: 0;
`;

export const Image: React.FC<{path : string, alt: string}> = (props) => (
    <StyledImage src={props.path} alt={props.alt}/>
)
