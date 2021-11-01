import React from "react";
import AddToCompareButton from "./AddToCompareButton";
import TableRow from "./TableRow";
import TableRowItem from "./TableRowItem";
import styled from "styled-components";

function BroadbandPlanRow({ deal }) {
  return (
    <TableRow>
      <TableRowItem>
        <S.Col1>
          <S.Logo src={deal.provider_logo_image_url} alt={deal.provider_name} />

          <div className="col-1-subcontainer">
            <S.Heading>{deal.provider_name}</S.Heading>
            <S.SubDescription>{deal.deal_name}</S.SubDescription>
          </div>
        </S.Col1>
      </TableRowItem>

      <TableRowItem>
        <S.Col2>
          <S.MonthlyPrice>£{deal.monthly_price}</S.MonthlyPrice>
          <span>Monthly Cost</span>
        </S.Col2>
      </TableRowItem>

      <TableRowItem>
        <S.Col3>
          <S.Heading>{deal.internet_speed} Mbps</S.Heading>
          <S.SubDescription>Standard speed</S.SubDescription>
        </S.Col3>
      </TableRowItem>

      <TableRowItem>
        <S.Col4>
          <S.Heading>£{deal.set_up_cost}</S.Heading>
          <S.SubDescription>Contract</S.SubDescription>
        </S.Col4>
      </TableRowItem>

      <TableRowItem>
        <AddToCompareButton deal={deal} />
      </TableRowItem>

      <TableRowItem>
        <button className="primary-btn">Continue</button>
      </TableRowItem>

      <TableRowItem>
        <span>More info</span>
      </TableRowItem>
    </TableRow>
  );
}

export default BroadbandPlanRow;

const S = {};

S.Logo = styled.img`
  width: 50px;
  height: auto;
`;

S.Col1 = styled.div`
  display: flex;
  align-items: center;

  .col-1-subcontainer {
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  }
`;

S.Col2 = styled.div`
  display: flex;
  flex-direction: column;
  color: #006cbe;
`;

S.MonthlyPrice = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

S.Col3 = styled.div`
  display: flex;
  flex-direction: column;
`;

S.SubDescription = styled.span`
  color: gray;
`;

S.Col4 = styled.div`
  display: flex;
  flex-direction: column;
`;

S.Heading = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
