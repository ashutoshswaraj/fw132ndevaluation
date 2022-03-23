import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SingleProductList = () => {
  // make a request to get the details
   const Pdata = useSelector((state) => state.products);
   const data = Pdata.data;
  return <></>;
};
