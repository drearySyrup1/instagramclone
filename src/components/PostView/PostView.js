import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  InteractionMenu,
  PhotoCircle,
  PostAuthorInfo,
} from "../Main/Main";
import { AiOutlineHeart as HeartIcon } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsl(0 0% 0% / 0.6);
`;

const openPost = keyframes`
from {
  width: 0;

}
to {
width:  min(1000px, 90vw);

}
`;
const closePost = keyframes`
from {
  height: 100%;
}
to {
height: 0;
}
`;

const StyledPostView = styled.div`
  position: fixed;
  background-color: white;
  width: min(1000px, 90vw);
  height: min-content;
  max-height: 90vh;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  animation: ${({ anim }) => anim} 500ms ease-in-out;
`;

const Comments = styled.div`
  height: 500px;
  overflow: auto;
  display: grid;
  gap: 10px;
`;
const Comment = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 10px;

  & > div {
    display: grid;
    gap: 5px;
  }

  & > div > *:last-child {
    display: flex;
    gap: 10px;
  }
`;
const RightSide = styled.div`
  font-size: 0.75rem;
  & > *:first-child {
    border-bottom: 1px solid #c2c2c2;
  }
  & > .comments {
    border-bottom: 1px solid #c2c2c2;
  }

  & > * {
    padding: 1rem;
  }

  & > .interactionmenu {
    padding-bottom: 0;
  }
`;

const Description = styled.div`
  font-size: 0.85rem;
`;

const LikeInfo = styled.div`
  padding: 1rem;
  font-size: 0.7rem;
  display: grid;
  gap: 7px;
  border-bottom: 1px solid #c2c2c2;
`;

const CloseIcon = styled(IoCloseOutline)`
  font-size: 1rem;
  border-radius: 50%;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
    padding: 2px;
  }
`;

const PostView = () => {
  const [anim, setAnim] = useState("");
  return (
    <>
      <Backdrop />
      <StyledPostView anim={anim}>
        <img
          src="https://source.unsplash.com/random/800x800/?viking"
          alt=""
        />
        <RightSide>
          <PostAuthorInfo photoSize="30px">
            <CloseIcon
              onClick={() => {
                setAnim(closePost);
              }}
            />
          </PostAuthorInfo>
          <Description>
            Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Facere dolor et, dolorem vitae, error pariatur
            hic, in nulla expedita nisi maxime saepe! Rem incidunt
            sunt repellat, voluptatem ipsam excepturi quaerat optio
            hic, autem eligendi maxime fugiat. Facere reiciendis
            quas quis assumenda. Nihil corporis quisquam ad
            excepturi! Enim molestiae reiciendis est ex aliquam sed
            id cum consequuntur facilis maiores vero, natus
            recusandae, cupiditate fuga laboriosam eaque laudantium.
            Necessitatibus magnam consequuntur incidunt alias
            consectetur cupiditate, molestias beatae sapiente
            distinctio autem ut amet! Necessitatibus ut sapiente
            ratione enim dolores hic nobis laborum, vero fugit
            quidem expedita exercitationem! Nesciunt natus optio
            illum delectus officia.
          </Description>
          <Comments className="comments">
            {Array(15)
              .fill(1)
              .map((item) => {
                return (
                  <Comment>
                    <PhotoCircle size="30px"></PhotoCircle>
                    <div>
                      <div>
                        <span className="bold">aurimas </span>
                        <span>
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Dicta sint accusantium,
                          doloribus corporis ullam dolorum
                          necessitatibus nam facilis doloremque
                          aliquam. Incidunt dolorum tenetur
                          consequuntur ad quae, qui nobis expedita
                          consectetur.
                        </span>
                      </div>
                      <div className="grey">
                        <span>1h</span>
                        <span>Reply</span>
                      </div>
                    </div>
                    <HeartIcon />
                  </Comment>
                );
              })}
          </Comments>
          <InteractionMenu className="interactionmenu" />
          <LikeInfo>
            <div className="bold">400 likes</div>
            <div className="grey">2 HOURS AGO</div>
          </LikeInfo>
          <div>input</div>
        </RightSide>
      </StyledPostView>
    </>
  );
};

export default PostView;
