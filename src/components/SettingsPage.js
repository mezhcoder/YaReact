import React from "react";
// import {ReactComponent as SettingsIcon} from "../files/settings.svg";

import CardForm from "./CardForm";
// import {Link} from "react-router-dom";
import Cards from "./Cards";

function SettingsPage({syncData, repository}) {

    return (
        <div className="page">
            <div className="container">
                <header className="header">
                    <nav className="nav">
                        <h1>School CI server</h1>
                    </nav>
                </header>

                <main>
                    { isEmptySyncData(syncData) ? <CardForm repository={repository}/> : <Cards syncData={syncData} repository={repository}/> }
                </main>

            </div>
            <footer className="footer">
                <ul>
                    <li><a href="/#" rel="noreferrer" >Support</a></li>
                    <li><a href="/#" rel="noreferrer">Learning</a></li>
                    <li><a href="/#" rel="noreferrer">Русская версия</a></li>
                </ul>

                <p>&#169; 2020 <a href="https://t.me/zhcoder" target="_blank" rel="noreferrer">Nikita Zhidenko</a></p>
            </footer>
        </div>
    );
}

function isEmptySyncData(syncData) {
    return !(syncData.repository.trim() && syncData.command.trim() && syncData.branch.trim());
}

// const mapStateToProps = state => {
//     return {
//         syncData: state.data.data
//     }
// }


export default SettingsPage;