import React, { Fragment } from 'react';
import Card from '../components/Card';
import './CardList.css';

const CardList = ({ list }) => {
    return (
        <Fragment>
            {
                list.map((element, index) => {
                    if (index === 0 || index % 3 === 0) {
                        let firstDdata = list[index];
                        let secondData = list[index + 1];
                        let thirdData = list[index + 2];
                        console.log(index, index + 1, index + 2)
                        console.log(firstDdata === undefined, secondData === undefined, thirdData === undefined)
                        return (
                            <div className='container-cardlist'>
                                <div className='cardlist'>
                                    {firstDdata&&<Card data={firstDdata}/>}
                                    {secondData&&<Card  data={secondData}/>}
                                    {thirdData&&<Card data={thirdData}/>}
                                </div>
                            </div>
                        )
                    }
            
                })
            }
        </Fragment>
    )
}

export default CardList;