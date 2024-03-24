/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const usePhone = () => {
  const axiosPublic = useAxiosPublic()
  // const [phones, setPhones] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:5000/phone")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPhones(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [phones, loading];

  const {
    data: phone = [],
    loading,
    refetch,
  } = useQuery({
    queryKey: ["phone"],
    queryFn: async () => {
      const res = await axiosPublic.get("/phone");
      return res.data;
    },
  });

  return [phone, loading, refetch];
};

export default usePhone;
