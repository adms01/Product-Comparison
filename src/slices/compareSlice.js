import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  compare: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    /**
     * Add deal object to compare array.
     * Limits compare array to 2 deals and doesn't allow duplicate deals
     */

    addToCompare: (state, action) => {
      if (state.compare.length < 2) {
        const index = state.compare.findIndex((x) => x.deal_id === action.payload.deal_id);

        if (index === -1) {
          state.compare.push(action.payload);
        }
      }
    },

    /**
     * Deletes the deal associated with deaL_id passed in
     */

    deleteFromCompare: (state, action) => {
      const index = state.compare.findIndex((x) => x.deal_id === action.payload);

      if (index !== -1) {
        state.compare.splice(index, 1);
      }
    },
  },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;

export const comparisonItems = (state) => state.compare.compare;

export default compareSlice.reducer;
