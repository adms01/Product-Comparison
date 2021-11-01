import React from "react";
import styled from "styled-components";

function TableRow(props) {
  return <S.Tr>{props.children}</S.Tr>;
}

export default TableRow;

const S = {};

S.Tr = styled.tr`
  font-size: 14px;
  color: #002033;
`;
