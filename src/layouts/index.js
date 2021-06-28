import { Link } from "react-router-dom"
// comp
import Footer from '../components/Footer';
import Icard from '../components/ICard';
import { Helmet } from "react-helmet";
function Index(props) {

    var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
    var tabPanels=document.querySelectorAll(".tabPanel");
    document.addEventListener('DOMContentLoaded', function(event) {
        tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
        tabPanels=document.querySelectorAll(".tabPanel");
        showPanel(0);
    })

    function showPanel(panelIndex) {
          tabButtons.forEach(function(node){
              node.style.backgroundColor="";
              node.style.color="";
          });
      
      tabPanels.forEach(function(node){
          node.style.display="none";
      });
      tabPanels[panelIndex].style.display="block";
    //   tabPanels[panelIndex].style.backgroundColor=colorCode;
    }
    return (
        <>
            <head>
                <Helmet>
                    <link rel="shortcut icon" href="assets/images/logo.png" type="image/x-icon" />
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
                    <link rel="stylesheet" href="./assets/css/homeStyle.css" />
                    <link rel="stylesheet" href="./assets/css/footer.css" />
                    <link rel="stylesheet" href="assets/css/navbar.css" />
                    <title>Dream Cinema</title>
                </Helmet>
            </head>

            <div className="entireNav fixed-top">

                <span className="navTrigger" data-toggle="collapse" data-target="#navbarNav">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
                <nav className="navi navbar navbar-expand-lg navbar-dark fixed-top">
                    <a className="navbar-brand" id="len1" href="index.html">
                        <img src="assets/images/logo.png" className="logo" />
                        <p className="d-inline">Dream Cinema</p>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a id="len2" className="nav-link hoverable" href="index.html">Home</a>
                            </li>

                            <li className="nav-item">
                                <a id="len3" className="nav-link hoverable" href="about.html">About Us</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link hoverable" href="contactUs.html">Contact Us</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link hoverable loginRegister" href="Login.html">Login | Register</a>
                                <div className="dropdown show profileDropdown userProfile">
                                    <a className="btn dropdown-toggle profileDropdown cw" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-user-circle userIcon "></i>
                                        <span className="userIconName text-white emailID">example@example.com</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right menuDropdown">
                                        <a className="dropdown-item manageAccount" href="manageAccount.html">
                                            <i className="fa fa-wrench pr-1 fl">
                                            </i>
                                            Manage Account
                                        </a>

                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item logoutUser" href="#">
                                            <i className="fa fa-power-off pr-2 fl">
                                            </i>Log Out</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

    <div id="headerCarousel" className="carousel" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#headerCarousel" data-slide-to="0" className=""></li>
            <li data-target="#headerCarousel" data-slide-to="1" className=""></li>
            <li data-target="#headerCarousel" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner" role="TOP MAIN">
            <div className="carousel-item slider active">
                <img className="first-slide headerImage img-fluid" src="./assets/images/end_game.jpg" alt="First slide" />
                <div className="container">
                    <div className="carousel-caption caption">
                        <h1>Avengers: Age of Ultron</h1>
                        <p>Airs in all cinemas on Feb 25</p>
                        <p><a className="btn btn-lg btn-primary " href="https://www.youtube.com/watch?v=2wcj6SrX4zw"
                                target="_blank" role="button">Watch Trailer</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item slider">
                <img className="first-slide headerImage img-fluid" src="./assets/images/end_game.jpg" alt="First slide" />
                <div className="container">
                    <div className="carousel-caption caption">
                        <h1>Avengers: Age of Ultron</h1>
                        <p>Airs in all cinemas on Feb 25</p>
                        <p><a className="btn btn-lg btn-primary " href="https://www.youtube.com/watch?v=2wcj6SrX4zw"
                                target="_blank" role="button">Watch Trailer</a></p>
                    </div>
                </div>
            </div>

            <div className="carousel-item slider">
                <img className="first-slide headerImage img-fluid" src="./assets/images/end_game.jpg" alt="First slide" />
                <div className="container">
                    <div className="carousel-caption caption">
                        <h1>Avengers: Age of Ultron</h1>
                        <p>Airs in all cinemas on Feb 25</p>
                        <p><a className="btn btn-lg btn-primary " href="https://www.youtube.com/watch?v=2wcj6SrX4zw"
                                target="_blank" role="button">Watch Trailer</a></p>
                    </div>
                </div>
            </div>

        
        </div>
        <a className="carousel-control-prev" href="#headerCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#headerCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
    </div>
    
    <div className="container mt-3">
        <h1>Today Shows</h1>
        <div id="top-shows" className="carousel slide carousel_slider" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row" id="topShows">
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="row" id="topShowsr2">
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="row" id="topShowsr3">
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="row" id="topShowsr4">
                    </div>
                </div>
            </div>
            <div className="arrow">
                <a className="btn " href="#top-shows" role="button" data-slide="prev">
                    <i className="fa fa-arrow-left"></i>
                </a>
                <a className="btn " href="#top-shows" role="button" data-slide="next">
                    <i className="fa fa-arrow-right"></i>
                </a>
            </div>
        
        </div>
    </div>


    <div className="container-fluid">
        <div className="parallax  align-items-center ">
            <div className="row theatre align-items-center">
                <div className="col-md-12 theatreCol text-center">
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


    <div className="container-fluid main-con">
        <div className="newitems mb-4">
            <div className="tabContainer" id="newReleaseParrent">
                <h1 className="title mt-2 p-2"><i>New Items</i> </h1>
                <div className="buttonContainer">
                    <button onClick={() => showPanel(0)} id="button1">New Release</button>
                    <button onClick={() => showPanel(1)} id="button2">Movies</button>
                    <button onClick={() => showPanel(2)} id="button4">Cartoons</button>
                </div>
                <div className='tabsList'>

                </div>
                     <div className="tabPanel" >
                        <p></p>
                        <div className="row" id="newRelease1">
                            
    
                        </div>
    
                    </div>
    
                    <div className="tabPanel" >
                        <p></p>
                        <div className="row" id="newRelease2">
                            
    
                        </div>
    
                    </div>
    
                    <div className="tabPanel" >
                        <p></p>
                        <div className="row" id="newRelease3">
                            
                        </div>
    
                    </div>
                

            </div>

        </div>
    </div>


    <div className="container-fluid">
        <div className="subscribe  align-items-center ">
            <div className="row theatre align-items-center">
                <div className="col-md-12 theatreCol text-center">
                    <h1><i>Action </i><i className="adve"> Adventure</i><i> Fantasy</i></h1>
                    <p><i>
                            <h3 className="adve">Be The First To Know</h3>
                        </i>
                    </p>
                    <h4>Reserve Your Seat before You Miss Tommorow!!</h4>
                </div>
            </div>
        </div>
    </div>

    <footer className="footer py-3 mx-auto">
        <div className="container-fluid text-center">
          <span className="text-muted h6">Dream Cinema © 2021</span>
          <div className="text-white d-inline"> 
            <a href="https://twitter.com/rickastley" rel="noopener" target="_blank" className="social text-white">TWITTER</a>
            <a href="https://www.instagram.com/officialrickastley/" rel="noopener" target="_blank" className="social text-white">INSTAGRAM</a>
          </div>
        </div>
    </footer>

            <Helmet>
            <script src="https://unpkg.com/localbase/dist/localbase.dev.js"></script>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
                    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                    crossorigin="anonymous"> </script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
                    crossorigin="anonymous"></script>
                <script src="assets/js/Backend/Login_Signup.js"></script>
                <script src="assets/js/home.js"></script>
                <script src="assets/js/navbar.js"></script>
            </Helmet>
        </>

    );
}

export default Index;