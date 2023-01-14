import moment from 'moment';
import './MobileCard.css';

const MobileCard  = ({data, onClick}) => {
    const {  title_short, artist, duration } = data;
    const { name: artistName, picture_medium,  } = artist;

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