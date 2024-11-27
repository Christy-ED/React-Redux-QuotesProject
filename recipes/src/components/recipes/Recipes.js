// DataList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../actions/actions.js";

const Recipes = () => {
  const dispatch = useDispatch();
  const { loading, recipes, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData()); 
  }, [dispatch]);
  
  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {recipes.map((recipes) => (
          <li key={recipes.id}>{recipes.name} {recipes.ingredients}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
