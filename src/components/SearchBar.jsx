import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  //ova funkcija je za prosledjivanje u url 
  const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
          navigate(`/search/${searchTerm}`);

          setSearchTerm(''); //to reset search term at empty string 
        }
  }
  return (
    //paper apears like its flowing at the top
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{borderRadius:20, border: '2px solid #e3e3e3', pl : 2, boxShadow:' none', mr: {sm : 5}}}>
        <input 
        type="text" 
        className='search-bar' 
        placeholder='Search...' 
        value={searchTerm}
        onChange={(e) => {setSearchTerm(e.target.value)}}/>
        <IconButton type="submit"
        sx={{p: '10px', color: 'red'}}>
          <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar