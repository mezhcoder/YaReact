import {ReactComponent as SettingsIcon} from '../files/settings.svg';
import {ReactComponent as ToolIcon} from '../files/tool.svg';
import {Link} from "react-router-dom";
import React, {useEffect } from 'react';
// import {connect} from "react-redux";
import { useDispatch } from 'react-redux';

function MainPage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type: "CLEAR_DATA"})
    }, [dispatch])

    return (
        <div className="page">
            <div className="container">
                <header className="header">
                    <nav className="nav">
                        <h1>School CI server</h1>

                        <button className="btn-grey">
                            <SettingsIcon className="settingsIcon"/>
                            Settings
                        </button>
                    </nav>
                </header>

                <main className="main zeroingParagraph" style={{justifyContent: "center"}}>
                    <div className="wrapper">
                        <ToolIcon className="toolIcon"/>
                        <p className="greyParagraph">Configure repository connection and synchronization settings</p>
                        <Link to='/settings'>
                            <button className="btn-gold">Open settings</button>
                        </Link>
                    </div>
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

export default MainPage;