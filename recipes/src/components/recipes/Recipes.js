// DataList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../actions/actions.js";

const Recipes = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData()); // Fetch data on component mount
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Replace with your data structure
        ))}
      </ul>
    </div>
  );
};

export default Recipes;