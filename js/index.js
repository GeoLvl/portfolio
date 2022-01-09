// const cursor = document.getElementsByClassName("cursor");

// document.addEventListener("mousemove", function(e){
//   let x = e.clientX;
//   let y = e.clientY;

//   cursor.style.left = x + "px";
//   cursor.style.top = y + "px";
// });

$(document).mousemove(function (e) {
  $(".pointer").css({ left: e.pageX, top: e.pageY });
});