var postorImage = document.querySelector(".poster");
var movieTitle = document.querySelector(".movieTitle");
var movieRelease = document.querySelector(".releaseDate");
var productionCompany = document.querySelector(".prodCompany");
var IDMBrating = document.querySelector(".ratingOverall");
var ratingStarsContainner = document.querySelector(".ratingStarsContainner");
var genereContainer = document.querySelector(".sgeneros");
var movieDesc = document.querySelector(".desc");
var availableTickets = document.querySelector(".availaibleTickets");
var buyTicketsButton = document.querySelector(".getTicket");
var trailer = document.querySelector(".videoTrailer");
var numComments  = document.querySelector(".commentsNum");
var commentsContainer = document.querySelector(".comments");
var commentForm = document.querySelector("#comment");
var commentArea = commentForm.querySelector(".commentArea");
buyTicketsButton.addEventListener('click',buyTickets);
commentForm.addEventListener('submit',submitComment);
var baseUrl = "http://127.0.0.1:5000/";
//Reference to all comments
var allComments = [];
var movId;
var movie;
const urlParams = new URLSearchParams(window.location.search);
movId = Number(urlParams.get('id'));
async function getComments() {
  return fetch(`${baseUrl}api/v1/comment/${movId}`, {
     method: "GET",
     headers: {"Content-type": "application/json; charset=UTF-8",
              "Authorization": `JWT ${readLoginCookie()}`
             },
     })
     .then(response =>response.json()) 
 }
async function startUp(){
// movie  = await getMovie(movId).then(document =>{
//     if(document !=6 ){
//         //Movie exists
//         //6 is the error code for object doesnot exist
//         return document;
//     }
//     else{
//         //Page not found
//         window.location.href = "404.html";

//     }
// })

//Read vid Id from the URL
movie = await fetch(`${baseUrl}api/v1/movie/${movId}`, {
      method: "GET",
      headers: {"Content-type": "application/json; charset=UTF-8",
              },
      })
      .then(response =>response.json())
			.then(res=>{
  return res;
})
console.log(movie)
allComments = await getComments();
document.title = `${movie['Title']} | Dream Cinema` ;
postorImage.src = `assets/images/${movie['Postor']}`;
document.querySelector('body').style.cssText = 
`background:linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(assets/images/${movie['Background']});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-attachment: fixed
`;
if(movie['Ticket']!=="Available"){
  //You can't buy the tickets
  buyTicketsButton.style.display = "none";
}
movieTitle.innerText = movie['Title'];
movieRelease.innerText = movie['ReleaseDate'];
productionCompany.innerText = movie['AiredBy'];
IDMBrating.innerText = movie['IDMBRating'];
//SetUpRating
for (let index = 0; index < parseInt(movie['IDMBRating'], 10); index++) {
    var gen = document.createElement('span');
    gen.innerHTML = `<i class="fa fa-star px-1"></i>`
    ratingStarsContainner.appendChild(gen);
}
//ADDING GENRES
var genre = movie['Genre'];
var gen = document.createElement('span');
gen.innerHTML = `<a class="">${genre}</a>`
genereContainer.appendChild(gen);

/////////////
movieDesc.innerText = movie['Description'];
availableTickets.innerText = movie['Ticket'];
trailer.src = movie['Trailer'];

const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;
//Even though screening dates are stored on the database since the databases are static we''ve decided to load a demo
let targetDate = "2021-07-04T00:00:00"// movie['Screening'];
countDown = moment(targetDate).toDate()
setInterval(() => {
let now = new Date().getTime();
distance = countDown - now;
document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
}, 1000);
}
startUp();
setUpComments();

async function setUpComments(){
    //Empty the comment container
    commentsContainer.innerHTML = '';
    allComments = await getComments();
    var commentsLen = 0;
    allComments.forEach(element => {
      numComments.innerText = `(${++commentsLen}) Comments`;
      var comU = document.createElement("div");
      comU.innerHTML = `<div class="media my-4">
      <img class="align-self-start rounded-circle mr-3" style="max-width: 64px;" src="https://st3.depositphotos.com/13159112/17145/v/600/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg" alt="User">
      <div class="media-body pl-3 leftBorder">
        <h5 class="mt-0 text-white">${element['Email']}</h5>
        ${element['Comment']}
      </div>
      <div class="text-muted d-inline cstext">${moment(element['Date']).format("MMM Do YYYY")}</div>
    </div>  `
    commentsContainer.appendChild(comU);
    });
}
async function submitComment(e){
    e.preventDefault();
    // var userName = readLoginCookie();
    // if(!readLoginCookie()){
    //     userName = "Anonymous user"
    // }
    var commen = commentArea.value;
    // await addComment(userName, movId,commen);
      _data = {
        "user_id": userId,
        "movie_id": movId,
        "comment": commen,
        "rating": 0,
        "date": "2021-06-28T12:20:30.895Z"
      }
      fetch(`${baseUrl}api/v1/comment`, {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {"Content-type": "application/json"
          },
          
      }).then(response=>response.json())
      .then(res=>console.log(res))
      .then(e=>{
        setUpComments();
        commentArea.value="";
      })
    
    
}
//#endregion
function buyTickets(){
    if(!readLoginCookie()){
        //User not logged in? send him to the login page
        window.location.href ='Login.html?LogReq=1';
        return;
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success mx-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirm order',
        text: `Are you sure you want to buy a ticket to ${window.movie['Title']} ?`,
        icon: 'info',
        showCancelButton: true,
        cancelButtonText: 'No, cancel',
        confirmButtonText: 'Yes, Proceed',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          _data = {
            "movie_id": movId
          }
          fetch(`${baseUrl}api/v1/ticket`, {
              method: "POST",
              body: JSON.stringify(_data),
              headers: {"Content-type": "application/json",
                      "Authorization": `JWT ${readLoginCookie()}`
                      },
                      
              })
              .then(response=>response.json())
              .then(res=>{
                console.log(res);
                if(res['ticket_id']!=undefined){
                  swalWithBootstrapButtons.fire(
                      'Ticket bought successfully',
                      `Thankyou for working with us, your digital ticket will be sent to you next as well as a copy to ${userEmail}`,
                      'success'
                    ).then(
                      e =>{
                          Swal.fire({
                              html:
                              `<div>Ticket ID : <b>${res['ticket_id']}</b></div>
                              <div class="alert alert-warning mt-2" role="alert">
                              Please <span style='color: red;'>do not</span> share this QR code or ticket ID with anyone and Make sure to have a copy of this with you when you visit us, hope you catch a great show :)
                              </div>
                              `,
                              imageUrl: `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${res['ticket_id']}`,
                              imageWidth: 300,
                              imageHeight: 300,
                              imageAlt: 'Ticket ID',
                            })
                      }
                  )
              }
              else{
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Sorry, Something went wrong. Please Try again later!',
                      footer: `<a href='contactUs.html'>Report this issue.</a>`
                    })
          }
              })


        }
        else{
          swalWithBootstrapButtons.fire(
            'Transaction canceled',
            'Purchase canceled by the user',
            'error'
          )
        }
      })
}

