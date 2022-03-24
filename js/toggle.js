var navTop = document.getElementById("nav-top");
var navBottom = document.getElementById("nav-bottom");

function myFunction(x) {
  x.classList.toggle("change");

  var TopStyle = navTop.style.display;
  var BottomStyle = navBottom.style.display;

  if (TopStyle === "block" && BottomStyle === "block") {
    navTop.style.display = "none";
    navBottom.style.display = "none";

    console.log("none");
  } else {
    console.log("block");
    navTop.style.display = "block";
    navBottom.style.display = "block";
  }
}
