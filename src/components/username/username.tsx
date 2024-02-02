import React from 'react';
import {StyledUserNameContainer, StyledName, StyledNameTag,  } from '../../styles/username/username_style.ts';

export const Username: React.FC<{ name: string; nameTag: string }> = (props) => (
  <StyledUserNameContainer data-testid="username">
    <StyledName>{props.name}</StyledName>
    <StyledNameTag>{props.nameTag}</StyledNameTag>
  </StyledUserNameContainer>
);
