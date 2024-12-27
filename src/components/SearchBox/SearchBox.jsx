import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";
import { useState } from "react";
export default function SearchBox() {
  const currentFilter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState(currentFilter || "");

  function handleChange(e) {
    setSearchVal(e.target.value);
    dispatch(changeFilter(e.target.value));
  }

  return (
    <div>
      <input
        className={styles.input}
        value={searchVal}
        type="search"
        name="search"
        onChange={handleChange}
        placeholder="search"
      />
    </div>
  );
}