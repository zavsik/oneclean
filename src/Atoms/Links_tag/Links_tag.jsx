import './Links_tag.css'
export default function Links_Tag(props) {
    return (
        <div className="link_block">
            {props.num == 1 && <a href={props.href}><h1>{props.text}</h1></a>}
            {props.num == 2 && <a href={props.href}><h2>{props.text}</h2></a>}
            {props.num == 3 && <a href={props.href}><h3>{props.text}</h3></a>}
        </div>
    )
}