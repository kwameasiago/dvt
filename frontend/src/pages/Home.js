import React, { Fragment, useEffect, useState } from 'react';
import Input from '../components/Input/Input';
import CardList from '../components/Card/CardList';
import MobileCardList from '../components/Mobile/MobileCardList'
import Loader from '../components/Loader/Loader';
import Navbar from '../components/Navbar/Navbar'
import { deezerApi } from '../Api';
import './Home.css';


const Home = () => {
  const [artist, setArtist] = useState('');
  const [songs, setSongs] = useState([]);
  const [load, setLoad] = useState(false);
  const isMobile = window.innerWidth <= 480;
  const inputStyle = {
    height: isMobile ? '40px' : '50px',
    width: isMobile ? '90%' : '50%'
  }

  useEffect(() => {
    if (artist !== '') {
      setLoad(true)
      deezerApi.get(`/search?q=${artist}`)
        .then(res => {
          setLoad(false)
          const { data: { data } } = res;
          setSongs(data)
        })
        .catch(error => {
          setLoad(false)
          setSongs(['Error'])
        })
    }

  }, [artist]);


  return (
    <div className='search'>

      <Navbar />
      <Input
        placeholder="Search artist name ..."
        customStyle={inputStyle}
        onChange={e => setArtist(e.target.value)}
        value={artist} />

      {load ? <Loader /> : isMobile
        ? <MobileCardList list={songs} />
        : <CardList list={songs} />



      }
    </div>
  )

}

export default Home;