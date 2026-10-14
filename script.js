const screenIds = ["home", "birthday", "reasons", "gallery", "letter", "final"];

function show(id) {
  screenIds.forEach((screenId) => {
    document.getElementById(screenId).classList.toggle("hidden", screenId !== id);
  });

  const current = document.getElementById(id);
  current.classList.remove("arrive");
  void current.offsetWidth;
  current.classList.add("arrive");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (id === "final") makeConfetti();
}

document.getElementById("begin").addEventListener("click", () => {
  makeHearts(22);
  show("birthday");
});

document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", () => {
    makeHearts(12);
    show(button.dataset.next);
  });
});

document.getElementById("wish").addEventListener("click", () => {
  document.getElementById("wishMessage").classList.remove("hidden");
  document.getElementById("wish").textContent = "Wish made, baby 💗";
  makeHearts(18);
});

document.querySelectorAll(".reason").forEach((button) => {
  button.addEventListener("click", () => {
    const message = document.getElementById("reasonMessage");
    message.textContent = button.dataset.message;
    message.classList.remove("hidden");
    makeHearts(5);
  });
});

document.getElementById("last").addEventListener("click", () => {
  makeHearts(35);
  show("final");
});

document.getElementById("replay").addEventListener("click", () => show("home"));

function makeHearts(count) {
  const layer = document.getElementById("heartLayer");
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["♡", "♥", "✦", "💗"][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 94 + 3}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${2.5 + Math.random() * 3}s`;
    heart.style.color = ["#ffacd2", "#ffe0ee", "#d8b5ff"][Math.floor(Math.random() * 3)];
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}

function makeConfetti() {
  const area = document.querySelector(".confetti");
  if (area.dataset.done) return;
  area.dataset.done = "1";

  for (let i = 0; i < 65; i++) {
    const piece = document.createElement("i");
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${-10 - Math.random() * 50}px`;
    piece.style.animationDelay = `${Math.random() * 1.6}s`;
    piece.style.background = ["#ffacd2", "#e8c99b", "#c8a7ff", "#a8f0dc"][i % 4];
    area.appendChild(piece);
  }
}
