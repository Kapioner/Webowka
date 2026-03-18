import { React, useState } from "react";
import "./App.css";
import APIfetch from "./APIfetch";
const SearchBar = ({keyword, onChange, searchSubmit}) => {
  return(
<form onSubmit={searchSubmit} className="SearchBar">
  <input
      key="search-bar"
      value={keyword}
      placeholder={"Search..."}
      onChange={(e) => onChange(e.target.value)}
  />
  </form>
  );
}
const App = () => {
  const [searchVar, setSearchVar] = useState("Charizard");
  const [submittedWord, setSubmittedWord] = useState("Charizard");
  const [edge, setEdge] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault(); 
    setSubmittedWord(searchVar); 
    setEdge(true);
  };
  return(
    <div>
      <h1>Wpisano {searchVar}</h1>
      <SearchBar
        keyword={searchVar}
        onChange={setSearchVar}
        searchSubmit={handleSearch} 
      />
      {edge && <APIfetch keyword={submittedWord} />}
    </div>
  );
}
export default App;
