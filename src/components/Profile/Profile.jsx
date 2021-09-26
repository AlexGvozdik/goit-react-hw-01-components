import React from 'react'
import PropTypes from 'prop-types';
import { ProfileDiv, Description, Image, Name, Tag, Location, Stats, Quantity } from './Profile.styled'

const Profile = ({ avatar, name, location, tag, stats: { followers, views, likes } }) => {
    return (
        <ProfileDiv className='profile'>
            <Description className='description'>
                <Image
                    src={avatar}
                    alt={name}
                    className='avatar'
                />
                <Name className='name'>{name}</Name>
                <Tag className='tag'>@{tag}</Tag>
                <Location className='location'>{location}</Location>
            </Description >

            <Stats className='stats'>
                <li>
                    <span className='label'>Followers</span>
                    <Quantity className='quantity'>{followers}</Quantity>
                </li>
                <li>
                    <span className='label'>Views</span>
                    <Quantity className='quantity'>{views}</Quantity>
                </li>
                <li>
                    <span className='label'>Likes</span>
                    <Quantity className='quantity'>{likes}</Quantity>
                </li>
            </Stats>
        </ProfileDiv>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}

export default Profile;