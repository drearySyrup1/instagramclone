import React from "react";
import styled from "styled-components";
import {
  BiDotsHorizontalRounded as DotMenuIcon,
  BiBookmark as SaveIcon,
} from "react-icons/bi";
import { AiOutlineHeart as HeartIcon } from "react-icons/ai";
import { HiOutlineChatBubbleOvalLeft as CommentIcon } from "react-icons/hi2";
import { TbSend as SendIcon } from "react-icons/tb";
import { mediaSizes } from "../../mediaSizes";

const StoryWrapper = styled.div`
  display: flex;
  gap: 10px;
  max-width: 630px;
  height: min-content;
  overflow-x: scroll;
`;

export const PhotoCircle = styled.div`
  --size: ${({ size }) => size};
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.textColor};

  flex-shrink: 0;
`;

const StoryCircle = styled(PhotoCircle)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to bottom left,
    rgb(211, 0, 197),
    rgb(255, 200, 0)
  );
  position: relative;

  &::after {
    content: "";
    position: absolute;
    background-color: #fff;
    width: 96%;
    height: 96%;
    border-radius: 50%;
  }

  & img {
    z-index: 1;
    width: 92%;
    height: 92%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const MainStyled = styled.div`
  display: grid;
  align-content: start;
  gap: 40px;
  justify-items: center;
  padding: 2rem;

  @media (width <= ${mediaSizes.XS}) {
    padding: 0rem;
  }
`;

const PostsWrapper = styled.div`
  display: grid;
  gap: 1rem;
`;

const Post = styled.div`
  width: 450px;
  display: grid;
  align-content: start;
  gap: 10px;
  padding-bottom: 1rem;
  border-bottom: 1px solid #b6b6b6;
  font-size: 0.75rem;

  & img {
    width: 450px;
    height: 600px;
    object-fit: cover;
    border-radius: 5px;
  }

  & input {
    outline: 0;
    border: 0;
    font-size: 0.75rem;
    background-color: ${({ theme }) => theme.bg};
  }
`;

const PostTitle = styled.div`
  padding: 0.5rem;
  font-size: 0.75rem;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const PostContent = styled.div``;

const PostTitleText = styled.div`
  display: grid;
  gap: 3px;
  flex-grow: 1;

  && .small {
    font-size: 0.7rem;
  }
`;

const InteractionMenu = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  gap: 10px;

  & > * {
    font-size: 1.5rem;
  }
`;

const Main = () => {
  return (
    <MainStyled>
      {/* <StoryWrapper>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
        <StoryCircle size="70px">
          <img
            src="https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY3OTc4OTc0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800"
            alt=""
          />
        </StoryCircle>
      </StoryWrapper> */}
      <PostsWrapper>
        <Post>
          <PostTitle>
            <StoryCircle size="35"></StoryCircle>
            <PostTitleText>
              <span>
                <span className="bold">mega_mansions</span>{" "}
                <span className="grey">• 2h</span>
              </span>
              <span className="small">Beverly Hills</span>
            </PostTitleText>
            <DotMenuIcon style={{ fontSize: "1rem" }} />
          </PostTitle>
          <img src="https://images.unsplash.com/photo-1678625741301-a5a38243ed01?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTc4NTg5Ng&ixlib=rb-4.0.3&q=80&w=800" />
          <InteractionMenu>
            <HeartIcon />
            <CommentIcon />
            <SendIcon style={{ flexGrow: 1 }} />
            <SaveIcon />
          </InteractionMenu>
          <span className="bold">727,242 Likes</span>
          <span>
            <span className="bold">mega_mansions</span> nice mansion
            <span className="grey"> ...more</span>
          </span>
          <span className="grey">View all 1,350 comments</span>
          <input type="text" placeholder="Add Comment" />
        </Post>
        <Post>
          <PostTitle>
            <StoryCircle size="35"></StoryCircle>
            <PostTitleText>
              <span>
                <span className="bold">mega_mansions</span>{" "}
                <span className="grey">• 2h</span>
              </span>
              <span className="small">Beverly Hills</span>
            </PostTitleText>
            <DotMenuIcon style={{ fontSize: "1rem" }} />
          </PostTitle>
          <img src="https://images.unsplash.com/photo-1678625741301-a5a38243ed01?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3OTc4NTg5Ng&ixlib=rb-4.0.3&q=80&w=800" />
          <InteractionMenu>
            <HeartIcon />
            <CommentIcon />
            <SendIcon style={{ flexGrow: 1 }} />
            <SaveIcon />
          </InteractionMenu>
          <span className="bold">727,242 Likes</span>
          <span>
            <span className="bold">mega_mansions</span> nice mansion
            <span className="grey"> ...more</span>
          </span>
          <span className="grey">View all 1,350 comments</span>
          <input type="text" placeholder="Add Comment" />
        </Post>
      </PostsWrapper>
    </MainStyled>
  );
};

export default Main;
