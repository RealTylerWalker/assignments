import React, { useState, useEffect } from 'react'
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.authorization = `Bearer ${token}`
    return config
})

function UserProvider(props) {



    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: []
    }

    const [userState, setUserState] = useState(initState)

    async function signup(creds) {
        try {
            const res = await axios.post('/api/auth/signup', creds)
            const { user, token } = res.data
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))

            //add local storagee
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

        } catch (error) {
            console.log(error)
        }
    }

    async function login(creds) {
        try {
            const res = await axios.post('/api/auth/login', creds)
            const { user, token } = res.data
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))

        } catch (error) {
            console.log(error)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setUserState({
                user: {},
                token: ""
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function getUserIssues() {
        try {
            const res = await userAxios.get('/api/main/issues/user')
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        } catch (error) {
            console.log(error)
            setUserState(prevState => ({
                ...prevState,
                issues: []
            }))
        }
    }

    async function getAllIssues() {
        try {
            const res = await userAxios.get('/api/main/issues')
            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        } catch (error) {
            console.log(error)
            setUserState(prevState => ({
                ...prevState,
                issues: []
            }))
        }
    }

    async function addIssue(newIssue) {
        try {
            const res = await userAxios.post('/api/main/issues', newIssue)
            setUserState(prevState => ({
                ...prevState,
                issues: [...prevState.issues, res.data]
            }))
        } catch (error) {
            console.log(error)
        }
        setForceUpdate(false)
    }

    // edit issue function
    async function editIssue(issueId, updatedData) {

        try {

            const res = await userAxios.put(`/api/main/issues/${issueId}`, updatedData)

            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.map(issue =>
                    issue._id === issueId ? res.data : issue
                )
            }))
        } catch (error) {
            console.log(error)
        }
        setForceUpdate(true)
    }

    async function deleteIssue(issueId) {
        try {
            const res = await userAxios.delete(`/api/main/issues/${issueId}`)
            setUserState(prevState => ({
                ...prevState,
                issues: prevState.issues.filter(issue => issue._id !== issueId)
            }))

            alert(issue._id)
        } catch (error) {
            console.log(error)
        }
    }

    const [forceUpdate, setForceUpdate] = useState(false)

    useEffect(() => {
        getUserIssues()
    }, [forceUpdate])

    console.log(userState.user)

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            getUserIssues,
            addIssue,
            deleteIssue,
            setForceUpdate,
            editIssue,
            getAllIssues

        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider;