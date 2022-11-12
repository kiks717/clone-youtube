import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed';
import SearchFeed from './components/SearchFeed';
import ChannelDetail from './components/ChannelDetail';
import {Box} from '@mui/material'
function App() {
  return (
      <BrowserRouter>
        <Box sx={{background: '#000'}}>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Feed/>}/>
            <Route path='/video/:id'  element={<VideoDetail/>}/>  
            <Route path='/channel/:id'  element={<ChannelDetail/>}/>  
            <Route path='/search/:searchTerm'  element={<SearchFeed/>}/>  
          </Routes>        
        </Box>
      </BrowserRouter>
  );
}

export default App;
