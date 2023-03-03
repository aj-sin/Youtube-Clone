import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { CheckCircle } from "@mui/icons-material";
import { demoChannelTitle, demoProfilePicture } from "../Utils/Constants";

const ChannelCard = ({ channel,marginTop }) => {
  return (
    <Box
      sx={{
        width: { md: "320px", xs: "358px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop:marginTop,
      }}
    >
        <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardContent
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <CardMedia
          image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channel?.snippet?.title}
          sx={{ width: "180px", height: "180px", borderRadius: "50%", mb: 2 }}
          />
        <Typography variant="h6" fontWeight="bold" color="grey" sx={{fontSize:"1rem"}}>
          {channel?.snippet?.title || demoChannelTitle}
          <CheckCircle sx={{ fontSize: "12px", color: "grey", ml: "5px" }} />
        </Typography>

        {channel?.statistics?.subscriberCount && (
            <Typography
             fontWeight="bold" color="grey" sx={{fontSize:'15px',mr:"5px"}}>
            {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}
            Subscriber
          </Typography>
        )}
      </CardContent>
        </Link>
    </Box>
  );
};

export default ChannelCard;
