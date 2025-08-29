document.addEventListener("DOMContentLoaded", () => {
  let hCnt = 0;
  let cCnt = 100;

  const hEl = document.getElementById("heart-count");
  const cEl = document.getElementById("coin-count");
  const historyEl = document.getElementById("call-history-list");

  document.querySelectorAll(".fa-heart").forEach((hBtn) => {
    hBtn.addEventListener("click", () => {
      hCnt++;
      hEl.textContent = hCnt;
    });
  });

  document.querySelectorAll(".fa-phone").forEach((pBtn) => {
    pBtn.closest("button").addEventListener("click", (e) => {
      const card = e.target.closest(".bg-white.shadow-md");
      const name = card.querySelector("h2").textContent;
      const num = card.querySelector(".text-xl.font-bold").textContent;

      if (cCnt < 20) {
        alert("Not enough coins to make a call!");
        return;
      }

      cCnt -= 20;
      cEl.textContent = cCnt;

      alert(`Calling ${name} at ${num}...`);

      const li = document.createElement("li");
      li.textContent = `${name} - ${num}`;
      historyEl.appendChild(li);
    });
  });

  document.querySelector("aside button").addEventListener("click", () => {
    historyEl.innerHTML = "";
  });
});
