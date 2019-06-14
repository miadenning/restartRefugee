// window.onscroll = function() {myFunction()};
//
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
//
// function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
// }
var addBtn = $('.submit-btn');
var cardContainer = $('.card-container');
var allComments = JSON.parse(localStorage.getItem('comments')) || [];

function appendAllComments() {
  allComments.forEach(function(toDo){
    cardContainer.append(`
    <div>
    <p class="to-do">${toDo}</p>
    </div>
  `);
  })
}
appendAllComments();
addBtn.on("click", appendToDo);

function appendToDo() {
  var toDo = $('.to-do').val();

  cardContainer.append(`
    <div>
    <p class="to-do">${toDo}</p>
    </div>
  `);
  setStorage(toDo);

  $('.to-do').val("");

}

function setStorage(toDo){
  allComments.push(toDo);
  var commentString = JSON.stringify(allComments);
  localStorage.setItem('comments', commentString);
}
