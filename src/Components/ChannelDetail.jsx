import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"
import { Comment } from  'react-loader-spinner'

import {Videos,ChannelCard} from "./"
import { FetchAPIdata } from "../Utils/FetchAPIdata"
const ChannelDetail = () => {
  const [channeldetails, setchanneldetails] = useState([])
  const [videos, setvideos] = useState([])

  const {id}=useParams()

  useEffect(() => {
    FetchAPIdata(`channels?part=snippet&id=${id}`)
    .then((data)=>(setchanneldetails(data?.items[0])))
    FetchAPIdata(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>(setvideos(data?.items)))

  }, [id])
  if(!channeldetails?.snippet) 
  {
    return (<Box minHeight="95vh" sx={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <Comment
  visible={true}
  height="80"
  width="80"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#F4442E"
/>
    </Box>);
  }
  return (
    
    <Box minHeight="95vh">
      <div
       style={{
      
       background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 100%)",
       height:"300px",
       zIndex:"10"
       }}
      />
      <Box sx={{display:"flex",justifyContent:'center',alignContent:"center"}}>
        <ChannelCard channel={channeldetails} marginTop={"-110px"}/>
      </Box>
      <Box display='flex' p={2}>
      <Box sx={{mr:{sm:"100px"}}}/>
      <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail
