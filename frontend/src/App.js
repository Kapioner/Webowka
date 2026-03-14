import { React, useState } from "react";
import "./App.css";

const SearchBar = ({keyword, onChange}) => {
  return(
  <input className="SearchBar"
      key="search-bar"
      value={keyword}
      placeholder={"Search news..."}
      onChange={(e) => onChange(e.target.value)}
  />
  );
}
const App = () => {
  const [searchVar, setSeatchVar] = useState("");
  return(
    <div>
      <h1>Wpisano {searchVar}</h1>
      <SearchBar
        keyword={searchVar}
        onChange={setSeatchVar}/>
    </div>
  );
}
export default App;
