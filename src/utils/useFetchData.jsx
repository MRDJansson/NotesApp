//useFetchData.js

import { useEffect } from "react";

export const useFetchData = (fetchData, hasFetched, shouldFetch) => {
  useEffect(() => {
    if (shouldFetch && !hasFetched) {
      fetchData();
    }
  }, 
  [fetchData, hasFetched, shouldFetch]);
};
