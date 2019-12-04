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
