// za prikaz videa na koji smo kliknuli i 
//slican content pored toga 
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Stack, Typography, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from './Videos';
import {fetchFromApi} from '../utils/fetchFromApi'
const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState(null);//za related videos

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.items[0]))
  }, [id])

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  //destructuring

    if(!videoDetail?.snippet) return 'Loading video..';

  return (
        <Box minHeight='95vh'> 
          <Stack direction={{sx: 'column', md : 'row'}}>
            <Box flex={1}>
              <Box sx={{width : '100%', position : 'sticky', top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />

                <Typography
                color="#fff" varinat="h5" fontWeight="bold" p={2}>
                  {title}
                </Typography>

                <Stack direction="row"
                 justifyContent='space-between'
                 sx={{color: '#fff'}} py={1} px={2}>

                  <Link to={`/channel/${channelId}`}>
                    <Typography 
                    varinat={{sm : 'subtitle1', md : 'h6', color: "#fff"}}>

                      {channelTitle}
                      <CheckCircle sx={{fontSize: '12px', ml: '5px', color: 'gray'}}/>
                    </Typography>
                  </Link>

                <Stack>
                  <Typography variant="body1" sx={{opacity :0.7}}>
                    {viewCount}  views
                  </Typography>
                </Stack>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
    )
}

export default VideoDetail