import React from "react";
import styled from "styled-components";

function CompareDealsButton({ length, setOpen }) {
  const handleClick = () => {
    if (length > 1) {
      setOpen(true);
    }
  };

  return (
    <S.Button active={length > 1 ? true : false} onClick={handleClick}>
      <span>Compare deals ({`${length} of 2`})</span>
    </S.Button>
  );
}

export default CompareDealsButton;

const S = {};

S.Button = styled.button`
  background-color: ${({ active }) => (!active ? "#c4c4c4" : "#006cbe")};
  color: #fff;
  padding: 10px 10px;
`;
