

export default function Issue(props) {

    const { title, description, imgUrl } = props

    return (
        <div>
            <h1>Title: {title}</h1>
            <h4>Description: {description}</h4>
            <img src={imgUrl} />

        </div>
    )
}