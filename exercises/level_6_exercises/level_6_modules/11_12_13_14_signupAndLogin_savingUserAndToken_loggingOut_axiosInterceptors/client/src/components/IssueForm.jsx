import { useState } from 'react'

export default function IssueForm() {

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

    console.log(formData)

    return (
        <form>
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