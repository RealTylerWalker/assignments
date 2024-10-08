import React, { useState } from 'react';

export const UserContext = React.createContext();

function UserProvider(props) {

    const initState = {
        user: {},
        token : "",
        issues: []
    }

const [userState, setUserState] = useState(initState);

    return (
        <UserContext.Provider value = {{...userState}}>
            [props.children]
        </UserContext.Provider>
    )
}

export default UserProvider;