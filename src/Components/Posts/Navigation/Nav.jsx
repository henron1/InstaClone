import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import './Navigation.css';

export default function SearchBar(props) {
  return (
    <SearchBarStyling>
      <div className="searchBar">
        <div className="logo">
          <i className="fab fa-instagram" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/640px-Instagram_logo.svg.png"
            alt="Instagram"
          />
        </div>
        <div className="right-logos">
          {/* <Link to='/create'><i className="far fa-compass"/></Link> */}
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <Link to="/">
            <i className="far fa-user" />
          </Link>
        </div>
      </div>
    </SearchBarStyling>
  );
}

const SearchBarStyling = styled.div`
  padding: 0 25px;
  .search {
    position: relative;
    color: #aaa;
    font-size: 16px;
  }
  .search input {
    width: 200px;
    height: 32px;
    background: #fcfcfc;
    border: 1px solid #aaa;
    border-radius: 5px;
  }
  .search input {
    text-indent: 70px;
  }
  .search .fa-search {
    display: inline;
    position: relative;
    left: 65px;
  }
  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 25px 0;
    justify-content: space-between;
  }
  .searchBar div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .searchBar img {
    width: 120px;
  }
  .logo img {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid rgba(128, 128, 128, 0.482);
  }
  .searchBar i {
    font-size: 28px;
  }
  .right-logos i {
    margin: 0 15px;
  }
`;