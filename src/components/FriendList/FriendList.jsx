import React from 'react'
import PropTypes from 'prop-types';
import Friend from './Friend'
import { List } from './FriendList.styled';
const FriendList = ({ friends }) => {
    return (
        <List class="friend-list">
            {friends.map(({avatar,isOnline, name, id }) => (
                <Friend key={id} avatar={avatar} name={name} isOnline={isOnline}/>
            ))}
</List>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
        })
    )
}

export default FriendList;