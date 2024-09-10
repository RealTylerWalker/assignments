import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider'
import EditIssueForm from './EditIssueForm'

export default function Issue(props) {

    const { issue } = props

    const { deleteIssue, editIssue } = useContext(UserContext)
    const [isBeingEdited, setIsBeingEdited] = useState(false)


    function handleEdit() {
        if (isBeingEdited) {
            setIsBeingEdited(false)
        } else {
            setIsBeingEdited(true)
        }
    }

    return (
        <div>
            {isBeingEdited ? (<EditIssueForm
                handleEdit={handleEdit}
                updateStatus={setIsBeingEdited}
                issue={props.issue}
                getIssues={props.getIssues}
                setForceUpdate={props.setForceUpdate}
            />) : (<IssueCard
                issue={issue}
                handleEdit={handleEdit}
                deleteIssue={deleteIssue} />)}
        </div>
    )
}

function IssueCard(props) {
    const { issue: { title, description, imgUrl, _id }, handleEdit, deleteIssue } = props
    return (<div className="issue-card">
        <h1>Title: {title}</h1>
        <h4>Description: {description}</h4>
        <p>ID: {_id}</p>
        <img src={imgUrl} />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={() => deleteIssue(_id)}>Delete</button>
    </div>)

}