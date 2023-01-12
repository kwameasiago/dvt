import moment from 'moment';
import Button from './Button';
import { useContext } from 'react';
import { CardContext } from './MobileCardList'
import './MobileModalCard.css';

const MobileModalCard = ({ data }) => {
    const context = useContext(CardContext);
    const { album, title_short, artist, duration, link } = data;
    const { title: albumTitle, cover_big,tracklist } = album;
    const { name: artistName, picture_medium, link: artistLink } = artist;
    return (
        <div className='mobile-modal'>
            
            <div className="modal-album">
            <div className='modal-album-content'>
                    <img src={picture_medium} alt={artistName} />
                    <Button content="Back" onClickEvent={context({})} />
                </div>

                <img src={cover_big} alt={albumTitle} />
            </div>
            <div className='mobile-modal-content'>
                
                <div className='mobile-modal'>

                    <h1>{title_short}</h1>
                    <h2>{albumTitle}</h2>
                    <h2>{title_short}</h2>
                    <h3>by {artistName} - {moment.utc(duration * 1000).format('HH:mm:ss')}</h3>
                    <ul>
                        <ol><a href={link} target="_blank">tracks</a></ol>
                        <ol><a href={artistLink} target="_blank">artist</a></ol>
                        <ol><a href={tracklist} target="_blank">Album tracklist</a></ol>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileModalCard;