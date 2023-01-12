import { Fragment, createContext, useState } from "react"
import MobileCard from "./MobileCard";
import MobileModalCard from "./MobileModalCard";
export const CardContext = createContext();

const MobileCardList = ({list}) => {
    const [showModal, setshowModal] = useState(false);
    const [currentCard, setCurrentCard] = useState({})
    
    
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