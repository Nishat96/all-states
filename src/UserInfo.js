import React from 'react';

const UserInfo = (props) => {
    const {email, name} = props.user;
    return (
        <div>
            <h4>Name: {name}</h4>
            <h6>Email: {email}</h6>
        </div>
    );
};

export default UserInfo;