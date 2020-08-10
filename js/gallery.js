document.addEventListener("DOMContentLoaded", function(event) {
  var gallery = document.createElement('div');

  gallery.classList.add('gallery')
  gallery.innerHTML = '<div class="varela" id="close-gallery">Close</div><img id="gallery-image">'

  document.querySelector('body').append(gallery);

  var images = document.querySelectorAll('.flexbin img');

  for (i = 0; i < images.length; i++) {
    images[i].addEventListener('click', event => {
      document.querySelector('.gallery').classList.add('active');
      document.getElementById('gallery-image').src = event.srcElement.src;
    });
  }

  var close = document.getElementById('close-gallery');

  close.addEventListener('click', event => {
    document.querySelector('.gallery').classList.remove('active');
  });
});
