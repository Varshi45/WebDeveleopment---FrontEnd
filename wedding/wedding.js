window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var scrollHeight = window.innerHeight;
  
    if (window.pageYOffset >= scrollHeight) {
      header.classList.add('blend');
    } else {
      header.classList.remove('blend');
    }
  });
  