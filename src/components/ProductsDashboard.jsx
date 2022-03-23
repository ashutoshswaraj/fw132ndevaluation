import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import {getproductsData} from "../Redux/actions"
export const Products = () => {
  // to get all products list on component mounts
    const dispatch = useDispatch();
  const Pdata = useSelector((state) => state.products);
  const data = Pdata.data
console.log(data.data)



  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
  }, [dispatch]);

  //    sort by price
  const handleSort = (e) => {
    // dispach handle sort action to the store
  };
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((product) => {
            return (
              <div>
                {
                  /* display the results here */

                  <Link to={`/product/${product.id}`}>
                    <div>
                      <h2>
                        {product.title}
                        <img src={product.image} alt="" />
                        <p>{product.price}</p>
                      </h2>
                    </div>
                  </Link>
                }
              </div>
            );
          })}
      </div>
    </>
  );
};
