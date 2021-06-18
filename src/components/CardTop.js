import { Link } from "react-router-dom"
 function CardTop(props) {

    return (
        <div class="col-lg-3 col-md-6 col-sm-12 topShowCard">
        <div class="card">
            <img class="img-fluid topShowsImage" alt="100%x100%" src={props.img}/>
            <div class="card-body">
                <h4 class="card-title">{props.name}</h4>
                <a class="btn topShowBtn" to={props.id} target="_blank">Get Ticket</a>
            </div>
        </div>
    </div>
    );
}

export default CardTop;