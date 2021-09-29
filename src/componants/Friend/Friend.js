import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id, name,phone, website, address} = props.friend;
    const history = useHistory()
    const friendsStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    };
    const url = `/friend/${id}`

    const handleFriendClick = () =>{
        history.push(`/friend/${id}`);
    }

    return (
        <div style={friendsStyle}>
            <h2>I am: {name} {id}</h2>
            <h5>Call Me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;