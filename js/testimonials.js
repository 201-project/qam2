'use strict';
var form = document.getElementById('user');
var feedbackArr =[];
function Feedback(name, pic,feedback) {
    this.name = name;
    this.pic = pic;
    this.feedback = feedback;
    feedbackArr.push(this);
   
}


  Feedback.prototype.render = function (){
    var userName = feedbackArr.name;
    var userPic = feedbackArr.pic;
    var userFeedback = feedbackArr.feedback;

    var container = document.getElementById("userFeedback")
    var h2El = document.getElementById('h2')
    container.appendChild(h2El);
    h2El.textContent = this.name;
    var imgEl = document.getElementById('userImage')
    container.appendChild(imgEl);
    imgEl.setAttribute("src", this.Pic)
    var pEl = document.getElementById('p')
    container.appendChild(pEl);
    pEl.textContent = this.feedback;
     }

form.addEventListener("submit", function(event) {
    event.preventDefault();
    var name = event.target.name.value;
    var pic = event.target.pic.value;
    var feedback = event.target.feedback.value;
    new Feedback(name ,pic, feedback);
   updateFeedback();
   Feedback.prototype.render();
  });



  function updateFeedback() {
    var userNameLocalStorage = JSON.stringify(feedbackArr);
    localStorage.setItem( 'feedback' ,userNameLocalStorage );
  }
  function getFeedback() {
      var getfeedback1 = localStorage.getItem('feedback' ); 
      if (getfeedback1) {
          feedbackArr.value = JSON.parse(getfeedback1)
      }
  }
  getFeedback();


