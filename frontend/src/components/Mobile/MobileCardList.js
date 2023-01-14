import { Fragment, createContext, useState } from "react"
import MobileCard from "./MobileCard";
import MobileModalCard from "./MobileModalCard";
export const CardContext = createContext();

const MobileCardList = ({list}) => {
    const [showModal, setshowModal] = useState(false);
    const [currentCard, setCurrentCard] = useState({})
    if (list.includes('Error')) {
        return <h1>Something went wrong. Try request for temporary access <a href='https://cors-anywhere.herokuapp.com/' > here</a></h1>
    }
    
    const currentCardHandler = (data) => () => {
        setshowModal(!showModal);
        setCurrentCard(data)
    }
    return (
    <Fragment>
        {
           showModal?<CardContext.Provider value={currentCardHandler}> <MobileModalCard  data={currentCard}/></CardContext.Provider>:  list.map(list => {
                return (
                   <MobileCard data={list} onClick={currentCardHandler} />
                )
            })
        }
    </Fragment>)
}

export default MobileCardList