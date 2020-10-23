import React, { useEffect } from 'react';
import { useState } from 'react';
import UserInfo from './UserInfo';

const Home = () => {
    const [count, setCount] = useState(0);
    
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handleDecrease = () => {
        setCount(count - 1);
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h4>Count: {count}</h4>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>

            <section className="useEffect-section">
                {
                    // users.map(user => <li>{user.email}</li> )

                    users.map(user => <UserInfo user = {user} ></UserInfo>)
                }
            </section>
        </div>
    );
};

export default Home;