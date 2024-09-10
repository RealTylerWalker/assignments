import { useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider'

export default function EditIssueForm(props) {

    console.log(props)
    const { updateStatus } = props
    const { title, description, imgUrl } = props.issue
    const { editIssue, setForceUpdate } = useContext(UserContext)

    const initState = {
        title, description, imgUrl
    }

    const [formData, setFormData] = useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmitEdit(e) {
        e.preventDefault()
        console.log({ formData })
        editIssue(props.issue._id, formData)
        updateStatus(false)
        setForceUpdate(true)
    }

    return (
        <form onSubmit={handleSubmitEdit}>
            <input
                name="title"
                placeholder='title'
                onChange={handleChange}
                value={formData.title}

            />
            <input
                name="description"
                placeholder='description'
                value={formData.description}
                onChange={handleChange}

            />
            <input
                name="imgUrl"
                placeholder='Image'
                value={formData.imgUrl}
                onChange={handleChange}

            />
            <button className='submitEdit'>Submit Edit</button>
            <button onClick={() => { props.handleEdit() }}>Cancel Edit</button>
        </form>
    )

}