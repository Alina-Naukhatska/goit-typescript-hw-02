import React from "react";
import Profile from "./components/Profile/Profile"
import user from "./assets/users.json"
import FriendList from "./components/Frendlist/FriendList";
import friends from "./assets/friends.json";
import TransactionHistory from "./components/Transaction/TransactionHistory";
import transactions from "./assets/transaction.json";

const App = () => {
    return (
        <div className="App">
            <Profile
                name={user.username}
                tag={user.tag}
                location={user.location}
                image={user.avatar}
                stats={user.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
};

export default App;