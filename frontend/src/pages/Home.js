import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import CardList from '../components/CardList';
import Loader  from '../components/Loader';
import api from '../Api';
import './Home.css';


const Home = () => {
  const [artist, setArtist] = useState('eminem');
  const [songs, setSongs] = useState([]);
  const [load, setLoad] = useState(false)
  const inputStyle = {
    height: '50px',
    width: '50%'
  }

  useEffect(() => {
    if(artist !== ''){
      setLoad(true)
      api.get(`/search?q=${artist}`)
      .then(res => {
        setLoad(false)
        const {data: {data}} = res;
        setSongs(data)
      })
      .catch(error => {
        setLoad(false)
        setSongs(['Something wen wrong'])
      })
    }
    
  }, [artist]);


  return (
    <div className='search'>
      <Input  
      placeholder="Search artist name ..." 
      customStyle={inputStyle} 
      onChange={e => setArtist(e.target.value)} 
      value={artist}/>
      
      {load?<Loader />:<CardList list={songs} />}
      </div>
  )
  
}

export default Home;