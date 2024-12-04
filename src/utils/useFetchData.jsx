//useFetchData.js

import { useEffect } from "react";

export const useFetchData = (fetchData, hasFetched) => {
  useEffect(() => {
    if (!hasFetched) {
      fetchData();
    }
  }, [fetchData, hasFetched]);
};
