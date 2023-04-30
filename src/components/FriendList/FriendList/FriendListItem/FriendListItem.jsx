import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendsItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li>
    <Status isOnline={isOnline}></Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </li>
);

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.number.isRequired,
};
