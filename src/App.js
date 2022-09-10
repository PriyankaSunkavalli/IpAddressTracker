import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import LocationDetails from "./components/LocationDetails";
import MapsEx from "./components/MapsEx";
import { useState } from "react";

const Root = styled.div``;

const BgImg = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  flex-direction: column;

  top: 0;
  h1 {
    text-align: center;
    color: white;
  }
`;

function App() {
  const [data, setData] = useState(null);

  return (
    <Root>
      <BgImg>
        <img src="/images/pattern-bg.png"></img>
      </BgImg>
      <Title>
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <LocationDetails data={data} setData={setData} />
      </Title>
      {data && <MapsEx data={data} />}
    </Root>
  );
}

export default App;
