const cursorRounded = document.querySelector('.cursor');
const cursorText = document.querySelector('.custom');

document.addEventListener('mousemove', e => {
  const mouseX = e.pageX;
  const mouseY = e.pageY;   
  
  cursorRounded.style.top = mouseY + "px"; 
  cursorRounded.style.left = mouseX + "px";   
})
