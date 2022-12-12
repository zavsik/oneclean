import "./Button.css"

export default function Button(props) {
    return (
        <>
            {props.num == 1 && <button className="size">{props.text}</button>}
            {props.num == 2 &&
                <div className="button_styled">
                    <button className="size">
                        <div className="decore"></div>
                        {props.text}
                        </button>
                </div>}
            {props.num == 3 && <button className="size">{props.text}</button>}
        </>
    )
}