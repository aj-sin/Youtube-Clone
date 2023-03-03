import { Stack } from "@mui/material";
import React from "react";

import { categories } from "../Utils/Constants";


const Sidebar = ({selectedCategory,setselectedCategory}) => {
  return (
    <>
      <Stack
        direction="row"
        sx={{
          flexDirection: { md: "column" },
          overflowY: "auto",
          height: { sx: "auto", md: "95%" },
        }}
      >
        {categories.map((category) => (
          
          <button
          
          className="category-btn"
            style={{
              background:category.name===selectedCategory && "#FC1503",
              color:"white"
          }}
          onClick={()=>(setselectedCategory(category.name))}
            key={category.name}
          >
            <span style={{ marginRight: "2px" ,color:category.name===selectedCategory ? "#fff" : "#FC1503"}}>{category.icon}</span>
            <span style={{opacity:category.name===selectedCategory? 1 : 0.8}}>{category.name}</span>
          </button>
        ))}
      </Stack>
    </>
  );
};

export default Sidebar;
