var card = document.querySelector('.about');

document.addEventListener("mousemove", e => {
    let mouseX  = (window.innerWidth / 2 - e.pageX) / 20;
    let mouseY = (window.innerHeight / 2 - e.pageY) / 15;
    
    card.style.transform = `rotateY(${mouseX}deg) rotateX(${mouseY}deg)`;
  });
