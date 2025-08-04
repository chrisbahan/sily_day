function showSurprise1() {
  document.getElementById("surprise1").classList.remove("hidden");
}

function showSurprise2() {
  document.getElementById("surprise2").classList.remove("hidden");
}

function showSurprise3() {
  document.getElementById("surprise3").classList.remove("hidden");
}

// Confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 2,
      d: Math.random() * 10 + 2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`,
      tilt: Math.random() * 10 - 10,
      tiltAngle: 0,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach((c, i) => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();

    c.y += c.d;
    c.tiltAngle += 0.05;
    c.x += Math.sin(c.tiltAngle);

    if (c.y > canvas.height) {
      confetti[i].y = -10;
      confetti[i].x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawConfetti);
}

createConfetti();
drawConfetti();
