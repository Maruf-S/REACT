import { Link } from "react-router-dom"
function ICard(props) {
    console.log(props);
    return (
        <div className="card hovereffect">
        <img className="card-img-top"
            src={props.img}
            alt="Thumbnail [100%x225]"
            data-holder-rendered="true"/>
        <div className="overlay">
            <a className="info" to={props.id}>Get Ticket</a>
        </div>
        <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
        </div>
        </div>
    );
}
export default ICard;