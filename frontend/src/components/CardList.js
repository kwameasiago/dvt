import React, { Fragment, createContext, useState } from 'react';
import Card from '../components/Card';
import CardModal from './CardModal';
import './CardList.css';
export const CardContext = createContext();

const CardList = ({ list }) => {
    const [currentCard, setCurrentCard] = useState(null);
    const [cardModal, setCardModal] = useState(false);
    const [songpreview, setSongPreview] = useState('');
    let audio = new Audio('', { preload: false });

    if (list.length === 0) {
        return <h1>No music found. { }</h1>
    }

    if (list.includes('Error')) {
        return <h1>Something went wrong</h1>
    }

    const currentCardHandler = (data) => {
        setCurrentCard(data);
        setCardModal(!cardModal)

    }

    const handlePreview = ({ preview }) => {
        try {
            const sound = document.getElementById('audio');
            sound.src = preview;
            if (preview === songpreview) {
                sound.src = '';
                setSongPreview('')
            }else{
                setSongPreview(preview);
                sound.play();
            }
            
        } catch (error) {
            
        }
    }

    const ContextCard = (data) => {
        return data && <CardContext.Provider value={{ currentCardHandler, songpreview, handlePreview }}> <Card data={data} /></CardContext.Provider>
    }
    return (
        <Fragment>
            <audio id="audio">
                <source src={songpreview} type="audio/ogg" />
                Your browser does not support the audio element.
            </audio >
            {
                list.map((element, index) => {
                    if (index === 0 || index % 3 === 0) {
                        let firstDdata = list[index];
                        let secondData = list[index + 1];
                        let thirdData = list[index + 2];
                        return (
                            <div className='container-cardlist' key={index}>
                                <div className='cardlist'>
                                    {firstDdata && ContextCard(firstDdata)}
                                    {secondData && ContextCard(secondData)}
                                    {thirdData && ContextCard(thirdData)}
                                </div>
                            </div>
                        )
                    }

                })
            }
            {cardModal && <CardContext.Provider value={currentCardHandler}><CardModal data={currentCard} /></CardContext.Provider>}

        </Fragment>
    )
}

export default CardList;