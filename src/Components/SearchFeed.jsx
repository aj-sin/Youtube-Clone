import { useState, useEffect } from "react";
import { Box,  Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { FetchAPIdata } from "../Utils/FetchAPIdata";
import { Videos } from "./";

const SearchFeed = () => {
  const { searchterm } = useParams();
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    FetchAPIdata(`search?part=snippet&q=${searchterm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchterm]);

  return (
    //|sx will be more clear after we add video section
    
      <Box
        p={2}
        minHeight="95vh"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span style={{ color: "#F31503" }}>Searched For : </span> {searchterm}{" "}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Box display='flex' p={2}>
      <Box sx={{mr:{sm:"100px"}}}/>
      <Videos videos={videos}/>
      </Box>
      </Box>
  );
};

export default SearchFeed;
