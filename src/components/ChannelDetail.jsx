import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
    const {id } = useParams()
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos,setVideos] = useState([])


    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]))

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items))

    },[id])


  return (
    <Box minHeight='95vh'>
        <Box>
          <div style={{background : 
          'linear-gradient( 180deg, hsl(0deg 0% 0%) 0%,hsl(0deg 100% 33%) 58%,hsl(0deg 100% 50%) 100%)',
          zIndex: 10, 
          height: '300px'}}
          /> 
          {/* div is for gradient */}

          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>

        <Box display="flex" p={2}>
            <Box sx={{mr : {sm : '100px'}}}/>
              <Videos videos={videos}/>
        </Box>
    </Box>
    )
}

export default ChannelDetail