import react from 'react';
import Button from './Button';
import './Card.css'

const Card = ({ data }) => {
    // console.log(data)
    const { album, title_short, artist, duration } = data;
    const { title: albumTitle, cover_big, cover_medium, } = album;
    const { name: artistName, picture_medium } = artist;
    const style = {
        backgroundColor: '#2a9d8f',
        color: '#fff'
    }
    return (
        <div className='card'>
            <div className="xl-image">
                <img src={cover_big} alt={albumTitle} />
            </div>
            <div className="content">
                <div className='left'>
                    <img src={picture_medium} alt={artistName} />
                </div>
                <div className='right'>
                    <div className='right-content'>
                        <h1>Album: {albumTitle}</h1>
                        <h2>{title_short}</h2>
                        <h3>{duration}</h3>
                        <Button onClickEvent={() => {}} content="preview" customeStyle={style} />
                        <Button onClickEvent={() => {}} content="more" customeStyle={style}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;