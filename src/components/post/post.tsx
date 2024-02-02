import React from 'react';
import { Image } from '../image/image';
import { Text } from '../text/text';
import { Username } from '../username/username';
import {PostContainer, ImageContainer, TextContainer, UserNameContainer} from '../../styles/post/post_style.ts';

export const Post: React.FC = () => (
  <PostContainer data-testid="post">
    <ImageContainer>
      <Image path={"src/assets/images/profile_picture.png"} alt={"description"} />
    </ImageContainer>
    <TextContainer>
      <UserNameContainer>
        <Username name={"Chadrak"} nameTag={"@chadrakh"} />
      </UserNameContainer>
      <div>
        <Text text={"Name a show where the lead character is the worst character on the show I’ll get Sabrina Spellman"} />
      </div>
    </TextContainer>
  </PostContainer>
);
