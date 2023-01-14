import { useContext } from 'react';
import { CardContext } from './CardList';
import Button from './Button';
import moment from 'moment';

import './CardModal.css'

const CardModal = (song) => {
    const context = useContext(CardContext);
    const { data } = song;
    if (!data) {
        return
    }
    console.log(data)
    const { album, title_short, artist, duration, link, preview } = data;
    const { title: albumTitle, cover_big, tracklist } = album;
    const { name: artistName, picture_medium, link: artistLink } = artist;

    return (
        <div className='container-modal'>

            <div className='modal-left'>
                <img src={cover_big} alt={albumTitle} />
            </div>
            <div className='modal-right'>
                <span onClick={() => context({})}>X</span>
                <div className='modal-content'>
                    <img src={picture_medium} alt={artistName} />
                    <h1>{title_short}</h1>
                    <h2>{albumTitle}</h2>
                    <h3>by {artistName} - {moment.utc(duration * 1000).format('HH:mm:ss')}</h3>
                    <ul>
                        <ol><a href={link} target="_blank" rel="noreferrer">tracks</a></ol>
                        <ol><a href={artistLink} target="_blank" rel="noreferrer">artist</a></ol>
                        <ol><a href={tracklist} target="_blank" rel="noreferrer">Album tracklist</a></ol>
                        <audio controls>
                            <source src={preview} type={"audio/ogg"} />
                            <source src={preview} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default CardModal