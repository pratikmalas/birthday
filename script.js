// Typing text
const text="You are my happiness, my world, my everything 💖";
let i=0;
function typing(){
 if(i<text.length){
  document.getElementById("typing").innerHTML+=text.charAt(i);
  i++; setTimeout(typing,60);
 }
}
typing();

// Hearts
function createHeart(){
 const colors=["#ff4da6","#ff6ec7","#ffd1dc","#c77dff","#9be7ff"];
 const heart=document.createElement("div");
 heart.className="heart";
 heart.innerHTML="❤";
 heart.style.left=Math.random()*100+"vw";
 heart.style.fontSize=(Math.random()*25+15)+"px";
 heart.style.color=colors[Math.floor(Math.random()*colors.length)];
 heart.style.animationDuration=(Math.random()*20+20)+"s";
 document.body.appendChild(heart);
 setTimeout(()=>heart.remove(),10000);
}
setInterval(createHeart,150);

// Popup
surpriseBtn.onclick=()=>{
  // show love popup
  secretBox.style.display="block";
  lovePopup.style.display="block";

  // 🎂 CAKE CUT ANIMATION
  const cake=document.getElementById("cake");
  cake.classList.add("cutCake");

  // cake cutting sound effect (optional if you add cake.mp3)
  // new Audio("cake.mp3").play();

  // fireworks celebration
  startFireworks();
}
closePopup.onclick=()=> {lovePopup.style.display="none";secretBox.style.display="none";}

// Music
musicBtn.onclick=()=>{
 if(bgMusic.paused){bgMusic.play();musicBtn.innerText="Pause";}
 else{bgMusic.pause();musicBtn.innerText="Music";}
}

// Password unlock
unlockBtn.onclick=()=>{
 if(passwordInput.value.toLowerCase()=="saruu") lockScreen.style.display="none";
 else wrongPass.innerText="Wrong password ❤️";
}

// Fireworks
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;canvas.height=window.innerHeight;
let particles=[];
function startFireworks(){
 for(let i=0;i<120;i++){
  particles.push({x:canvas.width/2,y:canvas.height/2,
  r:Math.random()*3+1,
  c:`hsl(${Math.random()*360},100%,60%)`,
  sx:(Math.random()-0.5)*8,sy:(Math.random()-1)*10});
 }
 animate();
}
function animate(){
 ctx.clearRect(0,0,canvas.width,canvas.height);
 particles.forEach((p,i)=>{
  p.x+=p.sx;p.y+=p.sy;p.r*=0.96;
  ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
  ctx.fillStyle=p.c;ctx.fill();
  if(p.r<0.5)particles.splice(i,1);
 });
 if(particles.length>0)requestAnimationFrame(animate);
}
