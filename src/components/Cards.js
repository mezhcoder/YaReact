import React from 'react';
import "../backend/Repository"
import Card from "./Card";
import {Link} from "react-router-dom";
import {ReactComponent as SettingsIcon} from "../files/settings.svg";

function renderSettingsButton() {
    return (
        <Link to="/clear">
            <button className="btn-grey">
                <SettingsIcon className="settingsIcon"/>
            </button>
        </Link>
    );
}

function Cards({syncData, repository}) {
    return (
        <div>
            <header className="header">
                <nav className="nav">
                    <h1>{syncData.repository}</h1>
                    {renderSettingsButton()}
                </nav>
            </header>

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