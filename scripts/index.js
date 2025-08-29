document.addEventListener("DOMContentLoaded", () => {
  let hCnt = 0;
  let cCnt = 100;
  let copyCnt = 0;

  const hEl = document.getElementById("heart-count");
  const cEl = document.getElementById("coin-count");
  const historyEl = document.getElementById("call-history-list");
  const copyBtn = document.querySelector("button.bg-green-600");

  document.querySelectorAll(".bg-white.shadow-md button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = btn.closest(".bg-white.shadow-md");

     
      if (btn.querySelector(".fa-heart")) {
        hCnt++;
        hEl.textContent = hCnt;
      }

      
      else if (btn.querySelector(".fa-phone")) {
        const name = card.querySelector("h2").textContent;
        const num = card.querySelector(".text-xl.font-bold").textContent;

        if (cCnt < 20) {
          alert("Not enough coins to make a call!");
          return;
        }

        cCnt -= 20;
        cEl.textContent = cCnt;

        alert(`Calling ${name} at ${num}...`);

        const now = new Date();
        const timeString = now.toLocaleTimeString("en-BD", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        const li = document.createElement("li");
        li.innerHTML = `
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm">
            <div>
              <p class="font-semibold">${name}</p>
              <p class="text-gray-600 text-sm">${num}</p>
            </div>
            <span class="text-gray-500 text-xs">${timeString}</span>
          </div>
        `;
        historyEl.appendChild(li);
      }

     
      else if (btn.querySelector(".fa-copy")) {
        const num = card.querySelector(".text-xl.font-bold").textContent;
        navigator.clipboard.writeText(num).then(() => {
          alert(`Number ${num} copied to clipboard!`);
          copyCnt++;
          copyBtn.textContent = `${copyCnt} Copy`;
        });
      }
    });
  });

  document.getElementById("clear-history").addEventListener("click", () => {
    historyEl.innerHTML = "";
  });
});
