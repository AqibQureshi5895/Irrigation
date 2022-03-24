var play = document.getElementById("play-btn");
var video = document.getElementById("about-video");

play.addEventListener("click", function () {
  if (!video.hasAttribute("controls")) {
    video.setAttribute("controls", true);
    play.style.display = "none";
    video.play();
  }
});

video.addEventListener("pause", function () {
  video.removeAttribute("controls");
  play.style.display = "block";
});
