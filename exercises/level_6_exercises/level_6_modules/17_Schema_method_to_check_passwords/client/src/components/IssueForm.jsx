import { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'


export default function IssueForm() {

    const { addIssue } = useContext(UserContext)

    const initState = {
        title: "",
        description: "",
        imgUrl: ""
    }

    const [formData, setFormData] = useState(initState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(formData)
        setFormData(initState)
    }

    return (
        <form onSubmit={handleSubmit}>
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
            <button>Submit</button>
        </form>
    )
}