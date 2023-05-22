import { useState } from "react";
import style from "./SearchBar.module.css"

function SearchBar({ onSearch }) {

   let [id, setId] = useState("");

   const handleChange = (event) => {
      let { value } = event.target;
      setId(value);
   }

   return (
   <div className={style.SearchContainer}>
      <input id={style.searchInput} type="search" onChange={handleChange} value={id} />
      <button className="btn" onClick={() => {onSearch(id); setId("")}}>
         Agregar
      </button>
   </div>
   );
}

export default SearchBar;
