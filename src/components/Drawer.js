import React, { useState } from "react";
import styled from "styled-components";
import CompareDealsButton from "./CompareDealsButton";
import DrawerCard from "./DrawerCard";
import { useSelector, useDispatch } from "react-redux";
import { comparisonItems, deleteFromCompare } from "../slices/compareSlice";
import ComparePopup from "./ComparePopup";

function Drawer() {
  const [isOpen, setOpen] = useState(false);
  const comparison = useSelector(comparisonItems);
  const dispatch = useDispatch();

  const removeItemHandler = (dealId) => {
    dispatch(deleteFromCompare(dealId));
  };

  return (
    <>
      <ComparePopup isOpen={isOpen} setOpen={setOpen} deals={comparison} />

      <S.DrawerContainer>
        <S.DrawerInner>
          {comparison?.map((deal) => (
            <DrawerCard
              key={deal.deal_id}
              logo={deal.provider_logo_image_url}
              provider={deal.provider_name}
              dealName={deal.deal_name}
              removeItemHandler={() => removeItemHandler(deal.deal_id)}
            />
          ))}

          <CompareDealsButton length={comparison.length} setOpen={setOpen} />
        </S.DrawerInner>
      </S.DrawerContainer>
    </>
  );
}

export default Drawer;

const S = {};

S.DrawerContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #daecff;
  height: 150px;
  display: flex;
  justify-content: center;
`;

S.DrawerInner = styled.div`
  display: flex;
  align-items: center;
`;
