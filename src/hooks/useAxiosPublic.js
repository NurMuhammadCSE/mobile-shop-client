import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://mobile-store-server-six.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
