import React from 'react'
import {StyledText} from '../../styles/text/text_style.ts';

export const Text: React.FC<{text : string}> = (props) => (
    <StyledText data-testid="text">{props.text}</StyledText>
)
