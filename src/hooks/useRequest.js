import { useEffect, useState } from "react";

const useRequest = (request) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      request()
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => setError(error.message))
        .finally(() => setLoader(false));
    }, 4000);
  }, []);

  return [data, loader, error];
};

export default useRequest;
