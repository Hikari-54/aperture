import './Container.css'

export default function Container(props) {

    return (
        <div className="container_out">
            {props.children}
        </div>
    )
}