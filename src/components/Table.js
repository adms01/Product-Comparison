import React from "react";
import styled from "styled-components";

export const Table = (props) => {
  return (
    <S.TableContainer>
      <S.Table>
        <S.TBody>{props.children}</S.TBody>
      </S.Table>
    </S.TableContainer>
  );
};

export default Table;

const S = {};

S.Table = styled.table`
  /* border-top-right-radius: 7px;
  border-top-left-radius: 7px; */
  width: 100%;
  background-color: #fff;
  border-spacing: 0;
  border-collapse: collapse;
  /* border: 1px solid #ccd2d8; */
`;

S.TableContainer = styled.div`
  border: 1px solid #daecff;
  width: 100%;
`;

S.THead = styled.thead`
  text-align: left;
  border-bottom: 1px solid #ccd2d8;
`;

S.Th = styled.th`
  font-weight: 700;
  font-size: 10px;
  color: #7d8793;
  padding: 18px 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

S.TBody = styled.tbody`
  .row:hover {
    background-color: #f5f7fa;
  }
`;
