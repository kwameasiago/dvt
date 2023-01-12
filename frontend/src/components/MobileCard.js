import moment from 'moment';
import './MobileCard.css';

const MobileCard  = ({data, onClick}) => {
    const { album, title_short, artist, duration, link } = data;
    const { title: albumTitle, cover_big,tracklist } = album;
    const { name: artistName, picture_medium, link: artistLink } = artist;
    console.log(data)
    return (
        <div className="container-mobile-card" onClick={onClick(data)}>
            <div className="mobile-left">
                <img src={picture_medium} alt={artistName} />
                <h1>{title_short}</h1>
                <h2>{moment.utc(duration*1000).format('HH:mm:ss')}</h2>
            </div>
            <div className="mobile-right">
                
            </div>
        </div>
    )
}

export default MobileCard