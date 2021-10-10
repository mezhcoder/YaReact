import React from "react";

function Card({card}) {
    return (
        <div style={{border: "1px solid green"}}>
            <p>Number {card.number}</p>
            <p>Commit {card.commit}</p>
        </div>
    );
}

export default Card;