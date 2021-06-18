import { Link } from "react-router-dom"
function ICard(props) {

    return (
        <div className="card hovereffect">
        <img className="card-img-top"
            data-src={props.img}
            alt="Thumbnail [100%x225]" src="assets/images/NoTimeToDie.jpg"
            data-holder-rendered="true"/>
        <div className="overlay">
            <Link className="info" to={props.id}>Get Ticket</Link>
        </div>
        <div className="card-body">
            <h4 className="card-title">{props.name}</h4>
        </div>
        </div>
    );
}
export default ICard;