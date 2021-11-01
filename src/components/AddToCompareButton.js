import React from "react";
import { useDispatch } from "react-redux";
import { addToCompare, comparisonItems, deleteFromCompare } from "../slices/compareSlice";
import { useSelector } from "react-redux";

function AddToCompareButton({ deal }) {
  const dispatch = useDispatch();
  const comparisionItems = useSelector(comparisonItems);
  const index = comparisionItems.findIndex((x) => x.deal_id === deal.deal_id);

  const handleClick = () => {
    if (index === -1) {
      dispatch(addToCompare(deal));
    } else {
      dispatch(deleteFromCompare(deal.deal_id));
    }
  };

  return (
    <button className="outline-btn" onClick={handleClick}>
      {index !== -1 ? "Remove" : "Add to compare"}
    </button>
  );
}

export default AddToCompareButton;
