document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
); //sidebar

function reiniciarVideo(video) {
    video.currentTime = 0;
    video.play();
  }

  var videos = document.querySelectorAll('.meu-video');
  videos.forEach(function(video) {
    video.addEventListener('ended', function() {
      reiniciarVideo(video);
    });
  }); // reiniciar video autoplay