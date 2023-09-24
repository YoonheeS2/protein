import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.div`
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;

    display: flex;
    border: solid 2px;
  }

  nav > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = () => {
  return (
    <Navigation>
      <nav>
        <div>
          <NavLink to="/">
            {/* <FontAwesomeIcon icon={faThumbsUp} /> */}
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/recommend">Recommend</NavLink>
        </div>
        <div>
          <NavLink to="/search">Search</NavLink>
        </div>
        <div>
          <NavLink to="/mypage">MyPage</NavLink>
        </div>
      </nav>
    </Navigation>
  );
};

export default Nav;
