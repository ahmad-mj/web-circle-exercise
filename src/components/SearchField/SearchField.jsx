import { useState } from "react";
import styles from "./SearchField.module.css";
const meals = [{id: "1", mealName:"flafel" },{ id: "2", mealName:"hummus" }];

const SearchField = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterdMeals, setFilteredMeals] = useState(meals);
  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);
  
  console.log("searchInput: ",searchInput);

  const filterMeals = meals.filter(meal => meal.mealName.includes(userInput))
  setFilteredMeals(filterMeals)

  }
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"     
        onChange={handleChange}
        value={searchInput}
      />
      <ul>{filterdMeals.map(meal => <li key={meal.id}>{meal.mealName}</li>)}</ul>
    </div>
  );
};

export default SearchField;
