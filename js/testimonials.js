'use strict'
var form = document.getElementById('user');

function Feedback(name, pic,feedback) {
    this.name = name;
    this.pic = pic;
    this.feedback = feedback;
    feedbackArr.push(this);
    console.log(this.name)
}
var feedbackArr =[];

  function setFeedback() {
    var userNameLocalStorage = JSON.stringify(feedbackArr);
    localStorage.setItem( 'feedback' ,userNameLocalStorage );
  }
  function getFeedback() {
      var getfeedback1 = localStorage.getItem('feedback' ); 
      if (getfeedback1) {
          feedbackArr.value = JSON.parse(getfeedback1)
          
      }
  }

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var pic = event.target.pic.value;
    var feedback = event.target.feedback.value;
    new Feedback(name ,pic, feedback);
   setFeedback();
  });
  getFeedback();
// var userName = document.getElementById('name');
//     var userNameLocalStorage = JSON.stringify(userName);
//     localStorage.setItem('name' ,userNameLocalStorage );
// var userPic = document.getElementById('pic');
//     var  userPiclocalStorage = JSON.stringify(user);
//     localStorage.setItem('user image' ,userPiclocalStorage );
//     var feedbackLocalStorage = document.getElementById('feedback');
//     var  feedbackLocalStorage= JSON.stringify(user);
//     localStorage.setItem('user feedback' ,feedbackLocalStorage );

//     var getNamelocal = JSON.parse(getName)
//     var getName = localStorage.getItem('name');
//      name.innerHTML = getNamelocal;

//      var getPiclocal  = JSON.parse(getPic)
//      var getPic = localStorage.getItem('user image');
//       pic.innerHTML = getPiclocal;

//       var feedbackLocalStorage = JSON.parse(feedback1)
//    var feedback1 = localStorage.getItem('user feedback');
//      feedback.innerHTML = feedbackLocalStorage;
// // function getLocalStorage() {   
//     //    var getfeedback = JSON.parse(localStorage.getItem('submit'))
    
//     // }
// document.getElementById("user").innerHTML = feedback.value;
// function userLocalStorage() {
    
//     var feedback = document.getElementById("name").value;
//     var feedback1 = document.getElementById("pic").value;
//     var feedback2 = document.getElementById("feedbace").value;
//     localStorage.setItem('fedbackname' , feedback);
//     localStorage.setItem('fedbackpic' , feedback1);
//     localStorage.setItem('fedback' , feedback2);
// }
// function myFunction2() {
//     document.getElementById("user").innerHTML = feedback;
// }