import React from "react";
import { NavLink } from "react-router-dom";
import { Discover, Activity, Home, Heart } from "iconic-react";
import styled from "styled-components";

const Navigation = styled.div`
  nav {
    position: fixed;
    background-color: #fff;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    border: solid 0.5px #fdfdfd;
  }

  nav > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const IconHome = styled(Home)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconDiscover = styled(Discover)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconActivity = styled(Activity)`
  margin-right: 5px;
  margin-left: 10px;
`;

const IconHeart = styled(Heart)`
  margin-right: 5px;
  margin-left: 10px;
`;

const Nav = () => {
  return (
    <Navigation>
      <nav>
        <div>
          <NavLink to="/diet">
            <IconActivity></IconActivity>
          </NavLink>
        </div>
        <div>
          <NavLink to="/community">
            <IconHome></IconHome>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <IconDiscover></IconDiscover>
          </NavLink>
        </div>
        <div>
          <NavLink to="/">
            <IconHeart></IconHeart>
          </NavLink>
        </div>
      </nav>
    </Navigation>
  );
};

export default Nav;
