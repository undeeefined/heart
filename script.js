function heart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left=Math.random()*100+"vh";
  heart.style.right=Math.random()*100+"vh";
  heart.style.animationDuration=Math.random()*2+3;
  heart.innerText="❤️";
  document.body.appendChild(heart);  
  setTimeout(()=>{
    heart.remove();
  }, 3000);
}
setInterval(heart, 200);