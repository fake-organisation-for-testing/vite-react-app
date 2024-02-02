import React from 'react'
import {StyledImage} from '../../styles/image/image_style.ts';

export const Image: React.FC<{path : string, alt: string}> = (props) => (
    <StyledImage src={props.path} alt={props.alt}/>
)
