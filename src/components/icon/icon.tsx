import React from 'react'
import styled from 'styled-components';

const StyledIcon = styled.img`
    width: 22.642px;
    height: 21.75px;
`;

export const Icon: React.FC<{path : string, alt: string}> = (props) => (
    <StyledIcon src={props.path} alt={props.alt}/>
)
