import axios from "axios"

export default function Issue(props) {

    const { title, description, imgUrl, _id } = props

    function deleteItem(id) {
        axios.delete(`/api/issues/${id}`)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }

    function handleDelete() {

        deleteItem(_id)
    }



    return (
        <div>
            <h1>Title: {title}</h1>
            <h4>Description: {description}</h4>
            <p>ID: {_id}</p>
            <img src={imgUrl} />
            <button >Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}