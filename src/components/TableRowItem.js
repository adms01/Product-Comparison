import React from "react";
import styled from "styled-components";

function TableRowItem(props) {
  return <S.Td>{props.children}</S.Td>;
}

export default TableRowItem;

const S = {};

S.Td = styled.td`
  padding: 20px 24px;
  border-bottom: 1px solid #daecff;
`;
