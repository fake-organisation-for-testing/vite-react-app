import React from 'react'
import { Icon } from '../icon/icon'
import {HeaderIcon} from '../../styles/header/header_style.ts';

export const Header: React.FC = () => (
  <HeaderIcon data-testid="header">
    <Icon path={"src/assets/images/round.png"} alt={"description"}/>
    <Icon path={"src/assets/images/feature_stroke.png"} alt={"description"}/>
  </HeaderIcon>
)

