import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";
import BroadbandTablePlans from "./components/BroadbandTablePlans";
import { getDeals } from "./utils/api";
import Drawer from "./components/Drawer";
import { comparisonItems } from "../src/slices/compareSlice";
import useFetch from "./utils/useFetch";

function App() {
  const comparison = useSelector(comparisonItems);
  let source = axios.CancelToken.source();
  const { data, isLoading, isError, error } = useFetch(() => getDeals(source.token), source);

  if (isError) {
    return <p>Ooops, we'll be back online soon</p>;
  }

  return (
    <S.AppContainer>
      <div className="deals-body">
        <div className="deals-inner">
          <BroadbandTablePlans deals={data} />
        </div>
      </div>
      {comparison.length > 0 && <Drawer />}
    </S.AppContainer>
  );
}

export default App;

const S = {};

S.AppContainer = styled.div`
  .deals-body {
    max-width: 1700px;
    margin: 0 auto;
  }

  .deals-inner {
    margin-top: 40px;
  }
`;
