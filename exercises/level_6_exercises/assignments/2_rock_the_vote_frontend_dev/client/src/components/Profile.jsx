import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from './IssueList';
import IssueForm from './IssueForm';

function Profile() {
    const { user, getUserIssues, issues } = useContext(UserContext);

    useEffect(() => {
        console.log("issues:", issues)
        getUserIssues();
    }, []);


    return (
        <>
            <h1>User: {user.username} </h1>.
            <IssueForm />
            <IssueList issues={issues} />
        </>
    );
}

export default Profile; 