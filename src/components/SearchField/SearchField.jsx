import { useState } from "react";
import styles from "./SearchField.module.css";

const SearchField = () => {
  const [searchInput, setSearchInput] = useState("");
  
  const handleChange = (e) => {
    const userInput = e.target.value;
    setSearchInput(userInput);
  }
  
  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Filter dishes..."
        type="text"     
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchField;
