import React from 'react';
import './Social-Card.css';

const SocialCard = (prop) => {
    // const data = props.data;
    const data = prop.data;
    return (
        <div>
            <div><b> {data.fullName} </b> {data.createdDate.toUTCString()} </div>
            <div>Learning React? Start small</div>
            <div><b>Author: </b> {data.email} </div>
            <div className="s-card">
                <h2> {data.mes}</h2>
            </div>
            <div className="s-footer">
                <span>Make this little difference</span>
            </div>
            <div>Like: {data.likes} , Share: {data.share}</div>
        </div>
    );
}

export default SocialCard;