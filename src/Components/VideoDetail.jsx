import { useState,useEffect } from "react"
import { Link,useParams } from "react-router-dom"
import { Comment } from  'react-loader-spinner'
import {Videos} from './'
import { CheckCircle } from "@mui/icons-material";
import {Stack,Box,Typography} from "@mui/material"
import ReactPlayer from "react-player"
import { FetchAPIdata } from "../Utils/FetchAPIdata"

const VideoDetail = () => {
  const [videodetail, setvideodetail] = useState([])
  const [videos, setvideos] = useState([])
  const {id}=useParams()

  useEffect(() => {
    FetchAPIdata(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>(setvideodetail(data.items[0])))
    FetchAPIdata(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setvideos(data.items))
  }, [id])
  
  if(!videodetail?.snippet)  {
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
  const {snippet:{channelTitle,channelId,title},statistics:{likeCount,viewCount}}=videodetail

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{xs:"column",md:"row"}}>
        <Box flex={1}>
          <Box sx={{ width: "100%", top:"86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
          
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2} >
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
            <Link to={`/channel/${channelId}`}>
            <Typography variant={{ sm: "subtitle1", md: 'h6' }} color='grey'>
              {channelTitle}
              <CheckCircle sx={{ fontSize: "12px", color: "grey", ml: "5px" }} />
            </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography  variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
              <Typography  variant="body1" sx={{ opacity: 0.7 }}  >
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            </Stack>
            
          </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction={"column"}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
