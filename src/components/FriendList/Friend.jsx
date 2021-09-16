import React from 'react'
import PropTypes from 'prop-types';
import { Item,Avatar } from './Friend.styled';
const Friend = ({isOnline=true, avatar,name}) => {
    return (
        <Item className="item">
              <span className={`${isOnline ? 'online' : 'offline'} status`} ></span>
  <Avatar className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </Item>
    );
}
Friend.defaultProps = {
    isOnline: true,
};

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
}

export default Friend;