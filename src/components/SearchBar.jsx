import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
//position: absolute;
display: flex;
input{
    padding: 10px;
    border: none;
    background-color: white;
    border-radius: 10px 0px 0px 10px;
    width: 500px;
    height: 20px;
}
    
`
const SearchClicked=styled.div`
    height: 40px;
    background-color: black;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0px 10px 10px 0px;
`

const SearchBar = () => {
  return (
    <Root>
      <input type='text' placeholder='Search for any ip address or domain'></input>
      <SearchClicked>
          <img src='/images/icon-arrow.svg'></img>
      </SearchClicked>
    </Root>
  );
}

export default SearchBar;
