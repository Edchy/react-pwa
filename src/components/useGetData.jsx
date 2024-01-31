import { useState, useEffect } from "react";

export default function useGetData(getData) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const res = await getData();
        // const data = await res.json();
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [getData]);
  return { data, isLoading, error };
}
