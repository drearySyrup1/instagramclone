import React from "react";
import styled from "styled-components";
import { mediaSizes } from "../../mediaSizes";
import { PhotoCircle } from "../Main/Main";

import { IoIosSettings } from "react-icons/io";

const ProfileStyled = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-auto-rows: min-content;

  @media (width <= ${mediaSizes.XS}) {
    padding: 0.5rem 0;
  }
`;

const ProfileInfo = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 5rem;
  font-size: 1.1rem;

  & > div {
    display: grid;
    gap: 1rem;
  }

  & > div > div:first-child,
  & > div > div:nth-child(2) {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  & > div > div:nth-child(3) {
    font-size: 0.8rem;
  }

  @media (width <= ${mediaSizes.XS}) {
    gap: 2rem;
    font-size: 1rem;
    .photoC {
      width: 100px;
      height: 100px;
    }
  }
`;

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  background-color: hsl(0, 0%, 92%);
  font-weight: bold;
  padding: 0.5rem 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 0%, 80%);
  }
`;

const Post = styled.div`
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HighLights = styled.div``;
const Posts = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, minmax(100px, 309px));

  @media (width <= ${mediaSizes.XS}) {
    gap: 3px;
  }
`;

const Profile = () => {
  return (
    <ProfileStyled>
      <ProfileInfo>
        <PhotoCircle className="photoC" size="150px" />
        <div>
          <div>
            <span className="bold">aurimas.2</span>
            <Button>Edit profile</Button>
            <IoIosSettings />
          </div>
          <div>
            <div>
              <span className="bold">21</span> posts
            </div>
            <div>
              <span className="bold">80</span> followers
            </div>
            <div>
              <span className="bold">202</span> following
            </div>
          </div>
          <div>
            <div>Aurimas Gaizauskas</div>
            <div>@bakku7</div>
          </div>
        </div>
      </ProfileInfo>
      <HighLights></HighLights>
      <Posts>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
          return (
            <Post>
              <img
                src="https://source.unsplash.com/random/800x800/?car"
                alt=""
              />
            </Post>
          );
        })}
      </Posts>
    </ProfileStyled>
  );
};

export default Profile;
