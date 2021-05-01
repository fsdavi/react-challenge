import { useEffect, useState } from "react";
import { api } from "../services/api";

export const useRequest = (query) => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getRequestData() {
      const response = await api.get(query);
      const dataFromResponse = await response.data;

      setData(dataFromResponse.data);
    }

    getRequestData(url);
  }, [url]);

  return { data };
};