import { useEffect, useState } from "react";

const usePhone = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/phone")
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
        setLoading(false);
      });
  }, []);
  return [phones, loading];
};

export default usePhone;
