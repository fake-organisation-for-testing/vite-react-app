import React from 'react'
import { Icon } from '../icon/icon'
import styled from 'styled-components';

const HeaderIcon = styled.div`
  width: 414px;
  display: flex;
  justify-content: space-between;
`;

export const Header: React.FC = () => (
  <HeaderIcon data-testid="header">
    <Icon path={"src/assets/images/round.png"} alt={"description"}/>
    <Icon path={"src/assets/images/feature_stroke.png"} alt={"description"}/>
  </HeaderIcon>
)

