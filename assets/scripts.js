document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = form?.querySelector("input[type='text']");
  const feedback = document.getElementById(form.id + "-feedback") || document.createElement("p");
  const puzzleId = document.body.dataset.puzzle; // e.g., data-puzzle="phase3"

  if (!feedback.id) {
    feedback.id = form.id + "-feedback";
    form.insertAdjacentElement("afterend", feedback);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const answer = (input.value || "").trim().toLowerCase();

    if (!answer || answer.length < 2 || answer.length > 50) {
      feedback.textContent = "⚠️ Please enter a valid answer.";
      feedback.style.color = "orange";
      return;
    }

    try {
      const response = await fetch("https://under-the-hood.sh00k3ms.workers.dev", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ puzzle: puzzleId, answer })
      });

      const result = await response.json();

      if (result.redirectTo) {
        feedback.textContent = "✅ Correct! Redirecting...";
        feedback.style.color = "lightgreen";
        setTimeout(() => {
          window.location.href = result.redirectTo;
        }, 1000);
      } else {
        feedback.textContent = "❌ Try again, hacker.";
        feedback.style.color = "red";
      }
    } catch (err) {
      feedback.textContent = "🚫 Server error. Please try again later.";
      feedback.style.color = "red";
      console.error(err);
    }
  });
});
