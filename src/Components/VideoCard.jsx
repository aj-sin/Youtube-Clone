import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../Utils/Constants";

const VideosCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: {  xs: "100%",sm:"358px" ,md: "320px"},
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: {  xs: "100%",sm:"358px" ,md: "320px"}, height: 180 }}
        />

        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="white">
              {snippet?.title.slice(0, 60) || demoVideoTitle}
            </Typography>
          </Link>
          <Link
            to={
              snippet?.channelId
                ? `/channel/${snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <Typography variant="subtitle2" fontWeight="bold" color="grey">
              {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideosCard;
