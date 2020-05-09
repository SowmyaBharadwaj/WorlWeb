var videoIndex = 1;

function plusVideo(n) {
  showVideo(videoIndex += n);
}

function currentVideo(n) {
  showVideo(videoIndex = n);
}

function showVideo(n) {
  var i;
  var videos = document.getElementsByClassName("video-item");
  var cir_indicator = document.getElementsByClassName("dots");
  if (n > videos.length) {videoIndex = 1}
  if (n < 1) {videoIndex = videos.length}
  for (i = 0; i < videos.length; i++) {
      videos[i].style.display = "none";
  }
  for (i = 0; i < cir_indicator.length; i++) {
      cir_indicator[i].className = cir_indicator[i].className.replace(" active", "");
  }
  videos[videoIndex-1].style.display = "block";
  cir_indicator[videoIndex-1].className += " active";
}
