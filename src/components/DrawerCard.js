import React from "react";
import styled from "styled-components";
import close_icon from "../assets/images/close_icon.svg";

function DrawerCard({ logo, provider, dealName, removeItemHandler }) {
  return (
    <S.DrawerCard>
      <S.LeftContainer>
        <S.DrawerLogo src={logo} alt={provider} />
      </S.LeftContainer>
      <S.MiddleContainer>
        <S.Title>{provider}</S.Title>
        <S.SubTitle>{dealName}</S.SubTitle>
      </S.MiddleContainer>

      <S.RightContainer>
        <img src={close_icon} alt="remove item" onClick={removeItemHandler} />
      </S.RightContainer>
    </S.DrawerCard>
  );
}

export default DrawerCard;

const S = {};

S.DrawerCard = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border: 1px solid #daecff;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 20px;
  width: 100%;
`;

S.DrawerLogo = styled.img`
  width: 60px;
  height: auto;
`;

S.LeftContainer = styled.div``;

S.MiddleContainer = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
`;

S.Title = styled.span`
  font-size: 12px;
`;

S.SubTitle = styled.span`
  font-size: 12px;
`;

S.RightContainer = styled.div`
  margin: 0 10px;
  img {
    cursor: pointer;
  }
`;
