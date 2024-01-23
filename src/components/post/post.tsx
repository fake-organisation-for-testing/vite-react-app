import React from 'react';
import styled from 'styled-components';
import { Image } from '../image/image';
import { Text } from '../text/text';
import { Username } from '../username/username';

const PostContainer = styled.div`
  display: flex;
  padding: 0 1rem;
`;

const ImageContainer = styled.div`
  margin-right: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const UserNameContainer = styled.div`
  display: flex;
`;

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
