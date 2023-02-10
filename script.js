const cursorRounded = document.querySelector('.cursor');
const cursorText = document.querySelector('.custom');

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;   
  
  cursorRounded.style.top = mouseY + "px"; 
  cursorRounded.style.left = mouseX + "px";   
})

const texts = document.querySelectorAll('.banner-text');

texts.forEach((text, index) => {
  setTimeout(() => {
    text.style.animation = `slide-in 1s forwards ${index * 0.5}s`;
  }, 0);
});

