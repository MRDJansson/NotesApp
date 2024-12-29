//useFetchData.js

import { useEffect } from "react";

// --- Fetch Data Hook ---
// Fetches data when the conditions are met (ie., data not yet fetched)
const useFetchData = (fetchData, hasFetched, shouldFetch) => {
  useEffect(() => {
    if (shouldFetch && !hasFetched) {
      fetchData();  // Trigger the fetch function if conditions are met
    }
  }, [fetchData, hasFetched, shouldFetch]);  // Dependency array ensures the effect runs under specific conditions
};

export default useFetchData;