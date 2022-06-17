import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hi Jamie,</h4>
        <h1>
          Welcome to <span>MY BCT DASHBOARD</span>
        </h1>
      </div>
      <div className="search">
        <BiSearch />
        <input type="text" placeholder="Search" />
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  .title {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #ADD8E6;
        font-family: 'Work Sans', sans-serif;
        letter-spacing: 0.2rem;
      }
    }
  }
  .search {
    background-color: #000080;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #ADD8E6;
    }
    input {
      background-color: transparent;
      border: none;
      color: #ADD8E6;
      'Work Sans', sans-serif;
      letter-spacing: 0.3rem;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #ADD8E6;
        'Work Sans', sans-serif;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;
          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;