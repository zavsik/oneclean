export default function H_Tag(props) {
    return (
        <>
            {props.num == 1 && <h1>{props.text}</h1>}
            {props.num == 2 && <h2>{props.text}</h2>}
            {props.num == 3 && <h3>{props.text}</h3>}
            {props.num == 4 && <p>{props.text}</p>}
        </>
    )
}