import React from 'react';
import star from '../images/star.png'

export default function Card(props) {
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.location === "Online") {
        badgeText = "ONLINE";
    }
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={ require(`../images/${props.coverImg}`) } alt="Katie Zaferes" className="card--img" />
            <div className="card--stats">
                <img src={star} alt="Pink star" className="card--star"/>
                <span> {props.stats.rating.toFixed(1)} </span>
                <span className="gray"> ({props.stats.reviewCount}) &bull; </span>
                <span className="gray"> {props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b> / person</p>
        </div>
    );
}