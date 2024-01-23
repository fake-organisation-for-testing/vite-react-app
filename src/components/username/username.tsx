import React from 'react';
import styled from 'styled-components';

const StyledUserNameContainer = styled.div`
  display: flex;
  width: 8.5rem;
  justify-content: space-between;
`;

const StyledName = styled.div`
  color: #141619;
  font-family: "SF Pro Text";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

const StyledNameTag = styled.div`
  color: #687684;
  font-family: "SF Pro Text";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Username: React.FC<{ name: string; nameTag: string }> = (props) => (
  <StyledUserNameContainer data-testid="username">
    <StyledName>{props.name}</StyledName>
    <StyledNameTag>{props.nameTag}</StyledNameTag>
  </StyledUserNameContainer>
);
