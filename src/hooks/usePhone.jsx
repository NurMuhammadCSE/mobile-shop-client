import { useEffect, useState } from "react";

const usePhone = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("phones.json")
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
        setLoading(false);
      });
  }, []);
  return [phones, loading];
};

export default usePhone;
