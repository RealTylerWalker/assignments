import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Issue(props) {

    const { deleteIssue } = useContext(UserContext)

    const { title, description, imgUrl, _id } = props


    return (
        <div>
            <h1>Title: {title}</h1>
            <h4>Description: {description}</h4>
            <p>ID: {_id}</p>
            <img src={imgUrl} />
            <button >Edit</button>
            <button onClick={() => deleteIssue(_id)}>Delete</button>
        </div>
    )
}