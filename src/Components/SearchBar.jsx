import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const navigate=useNavigate()
  const [searchterm, setSearchterm] = useState("")
  const handleonsubmit=(e)=>{
    e.preventDefault()
    if(searchterm){

      navigate(`/search/${searchterm}`)
      setSearchterm("")
    }

  }
  return(
  <Paper 
  component="form" 
  onSubmit={handleonsubmit}
  sx={{ borderRadius: "20px", pl:2,border:"1px solid #e3e3e3",mr:{sm:5},boxShadow:"none" }}
  >
    <input 
    // style={{border:"none"}}
    className="search-bar"
    placeholder="Search..." 
    // value=""
    onChange={(e)=>(setSearchterm(e.target.value))}
    />
    <IconButton  type="submit" sx={{ p: "10px", color: "red" }}>
      <Search />
    </IconButton>
  </Paper>
)};

export default SearchBar;
