import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { FetchAPIdata } from "../Utils/FetchAPIdata";
import {Sidebar,Videos} from "./";


const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState("New")
  const [videos, setvideos] = useState([])

  useEffect(() => {
    FetchAPIdata(`search?part=snippet&q=${selectedCategory}`)
      .then((data)=>(setvideos(data.items)))
  }, [selectedCategory])
  
  return (
    
    //|sx will be more clear after we add video section
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}> 
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          paddingX: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
        <Typography variant="body2" className="copyright" sx={{mt:1.5}}>Copyright --@2023 | Ajit Singh</Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto",height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} <span style={{color:"#F31503"}}> Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
