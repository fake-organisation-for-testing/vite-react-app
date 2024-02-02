import React from 'react'
import {StyledIcon} from '../../styles/icon/icon_style.ts';

export const Icon: React.FC<{path : string, alt: string}> = (props) => (
    <StyledIcon src={props.path} alt={props.alt}/>
)
