import { Link } from "react-router-dom"
// comp
import Footer from '../components/Footer';
import Icard from '../components/ICard';
function Index (props) {

    return (
        <> 
            <div id="headerCarousel" class="carousel" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#headerCarousel" data-slide-to="0" class=""></li>
                    <li data-target="#headerCarousel" data-slide-to="1" class=""></li>
                    <li data-target="#headerCarousel" data-slide-to="2" class="active"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item slider">
                        <img class="first-slide headerImage img-fluid" src="./assets/images/end_game.jpg" alt="First slide"/>
                        <div class="container">
                            <div class="carousel-caption caption">
                                <h1>Avengers: Age of Ultron</h1>
                                <p>Airs in all cinemas on Feb 25</p>
                                <p><a class="btn btn-lg btn-primary " href="https://www.youtube.com/watch?v=2wcj6SrX4zw"
                                        target="_blank" role="button">Watch Trailer</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slider ">
                        <img class="second-slide headerImage img-fluid" src="./assets/images/hunger.jpg" alt="Second slide"/>
                        <div class="container">
                            <div class="carousel-caption caption">
                                <h1>Hunger Games</h1>
                                <p>Airs in all cinemas on Feb 18</p>
                                <p><a class="btn btn-lg btn-primary " href="https://www.youtube.com/watch?v=ue80QwXMRHg"
                                        target="_blank" role="button">Watch Trailer</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item slider active">
                        <img class="third-slide headerImage  img-fluid" src="./assets/images/Black Panther.jpg"
                            alt="Third slide"/>
                        <div class="container">
                            <div class="carousel-caption caption">
                                <h1>Black Panther</h1>
                                <p>Airs in all cinemas on Feb 18</p>
                                <p><a class="btn btn-lg btn-primary" href="https://www.youtube.com/watch?v=xjDjIWPwcPU"
                                        target="_blank" role="button">Watch Trailer</a></p>
                            </div>
                        </div>
                    </div>
        
                </div>
                <a class="carousel-control-prev" href="#headerCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#headerCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div class="container-fluid">
                <div class="parallax  align-items-center ">
                    <div class="row theatre align-items-center">
                        <div class="col-md-12 theatreCol text-center">
                            <h1><i>Today In Theatre</i></h1>
                            <p><i>
                                    <h3>Action, Adventure, Fantasy</h3>
                                </i></p>
                            <p><i>
                                    <h4>Reserve Your Seat before You Miss Tommorow!!</h4>
                                </i> </p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="container-fluid main-con">
                <div class="newitems mb-4">
                    <div class="tabContainer">
                        <h1 class="title mt-2"><i>New Items</i> </h1>             
                    <div class="tabPanel">
                    <p></p>
                    <div class="row ">
                        <Icard id={1} name={'sample movie'} img={'https://media.gettyimages.com/photos/jessica-mauboy-attends-the-crown-img-tennis-party-on-january-19-2020-picture-id1200464741?s=612x612'}/>
                    </div>
                </div>

            </div>

        </div>
    </div>
        
            <div class="container-fluid">
                <div class="subscribe  align-items-center ">
                    <div class="row theatre align-items-center">
                        <div class="col-md-12 theatreCol text-center">
                            <h1><i>Action </i><i class="adve"> Adventure</i><i> Fantasy</i></h1>
                            <p><i>
                                    <h3 class="adve">Be The First To Know</h3>
                                </i>
                            </p>
                            <h4>Reserve Your Seat before You Miss Tommorow!!</h4>
                            <a to="/auth/login"><button class="btn btn-lg btn-danger subButton">Subscribe</button></a>
                        </div>
                    </div>
                </div>
            </div>
        

        <Footer/>
        </>

    );
}

export default Index;