import React from 'react';
import "../backend/Repository"
import Card from "./Card";

function Cards({syncData, repository}) {
    return (
        <div>
            <h1>{syncData.repository}</h1>

            <div> {
                repository.getCards(syncData.repository).map(card => {
                    return <Card card={card} key={card.number}/>
                })
            }
            </div>
        </div>
    );
}

export default Cards;