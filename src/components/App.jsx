import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistoryList/TransactionHistoryList';
import dataUser from '../data/user';
import dataStatistics from '../data/dataStatistics';
import dataFriends from '../data/friends';
import { GlobalStyle } from 'components/GlobalStyle';
export const App = () => (
  <>
    <GlobalStyle />
    <Profile
      username={dataUser.username}
      tag={dataUser.tag}
      location={dataUser.location}
      avatar={dataUser.avatar}
      stats={dataUser.stats}
    />
    <Statistics title="Upload stats" stats={dataStatistics} />
    <FriendList friends={dataFriends} />
    <TransactionHistory />
  </>
);
