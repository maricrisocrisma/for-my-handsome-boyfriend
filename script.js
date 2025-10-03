// ❤️ Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    heart.style.fontSize = (16 + Math.random() * 24) + "px";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
  setInterval(createHeart, 500);
  
  // 💙 I Love You Button (only works on index page)
  const loveBtn = document.getElementById("loveBtn");
  if (loveBtn) {
    loveBtn.addEventListener("click", () => {
      const loveText = document.createElement("div");
      loveText.classList.add("love-text");
      loveText.innerText = "I LOVE YOU 💙";
      document.body.appendChild(loveText);
  
      setTimeout(() => {
        loveText.remove();
      }, 3000);
    });
  }
  