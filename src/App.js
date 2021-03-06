import React from "react";
import user from "./data/user.json";
import statisticalData from "./data/statistical-data.json";
import friends from './data/friends.json';
import transactions from './data/transactions.json'
import "./App.css";
import Profile from "./components/Profile/Profile";
import Statisticss from "./components/Statistics/Statistics";
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
const App = () => {
  return (
    <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statisticss title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
</>
  );
};

export default App;
