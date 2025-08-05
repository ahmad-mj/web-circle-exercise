import { useEffect, useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = ({dishes, onFilter}) => {
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    if(!Array.isArray(dishes)) return;
    const filteredMeals = dishes.filter(dish => dish.strMeal.toLowerCase().includes(searchInput.toLowerCase()));

onFilter(filteredMeals)
  }, [searchInput, dishes, onFilter]);

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"     
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </div>
  );
};

export default SearchField;
