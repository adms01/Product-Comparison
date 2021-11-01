import { useEffect, useReducer } from "react";

const useFetch = (query, source) => {
  const initialState = {
    data: [],
    isLoading: true,
    isError: false,
    error: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "LOADING":
        return { ...initialState, isLoading: true };
      case "FETCHED":
        return { ...initialState, data: action.payload, isLoading: false };
      case "FETCH_ERROR":
        return { ...initialState, isLoading: false, isError: true, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    (async () => {
      try {
        const res = await query();
        dispatch({ type: "FETCHED", payload: res });
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err });
      }
    })();

    return () => {
      source.cancel();
    };
  }, []);

  return { ...state };
};

export default useFetch;
