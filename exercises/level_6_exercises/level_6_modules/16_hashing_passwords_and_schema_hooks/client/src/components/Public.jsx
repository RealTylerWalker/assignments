import React from 'react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import IssueList from '../components/IssueList';


function Public() {
    const { getAllIssues, issues } = useContext(UserContext)



    useEffect(() => {
        getAllIssues()
    }, [])

    return (
        <>
            Public Page
            <IssueList issues={issues} />
        </>
    );
}

export default Public;