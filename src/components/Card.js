import React from "react";
import '../css/Card.css'

import {ReactComponent as DoneIcon} from '../files/done.svg';
import {ReactComponent as ClockIcon} from '../files/clock.svg';
import {ReactComponent as FailIcon} from '../files/fail.svg';
import {ReactComponent as UserIcon} from '../files/user.svg';
import {ReactComponent as BranchIcon} from '../files/branch.svg';
import {ReactComponent as CalendarIcon} from '../files/calendar.svg';
import {ReactComponent as TimeIcon} from '../files/time.svg';

function renderIconStatus(status) {
    switch (status) {
        case "done":
            return <DoneIcon/>;
        case "clock":
            return <ClockIcon/>;
        case "fail":
            return <FailIcon/>;
        default:
            return <DoneIcon/>;
    }
}
function getColorStatus(status) {
    switch (status) {
        case "done":
            return "#00B341"
        case "clock":
            return "#FF9A00"
        case "fail":
            return "#FF3333"
        default:
            return "FF3333"
    }
}
function renderTitleStatus(status, number, commit) {
    return (<div className="title-card">
        <div className="title-number-card" style={{color: getColorStatus(status)}}>
            #{number}
        </div>
        <>{commit}</>
    </div>);
}

function dateConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let hour = a.getHours();
    let min = a.getMinutes();
    return date + ' ' + month + ' ' + hour + ':' + min;
}

function timeConverter(UNIX_seconds) {
    let a = new Date(UNIX_seconds * 1000);
    let hour = a.getHours();
    let min = a.getMinutes();
    return hour.toString() + ' ч ' + min.toString() + ' мин'
}

function Card({card}) {
    return (
        <div className="card">

            <div className="card-commit">
                {renderIconStatus(card.status)}
                <div className="card-commit-info">
                    <div className="card-title">
                        {renderTitleStatus(card.status, card.number, card.commit)}
                    </div>

                    <BranchIcon/> {card.branch} {card.branch_hex} <UserIcon/> {card.author}
                </div>
            </div>



            <div className="card-date">
                <div className="card-date-wrapper">
                    <CalendarIcon/> {dateConverter(card.unixCommit)}
                </div>

                <div>
                    <TimeIcon/> {timeConverter(card.unixTimeSec)}
                </div>
            </div>


        </div>
    );
}

export default Card;