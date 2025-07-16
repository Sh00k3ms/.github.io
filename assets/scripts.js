// assets/scripts.js

document.addEventListener("DOMContentLoaded", () => {
  const puzzle1Form = document.getElementById("puzzle1-form");
  const puzzle1Input = document.getElementById("puzzle1-answer");
  const puzzle1Feedback = document.getElementById("puzzle1-feedback");

  puzzle1Form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = puzzle1Input.value.trim().toLowerCase();
    const correctAnswer = "this is the gateway to the next phase";

    if (userAnswer === correctAnswer) {
      puzzle1Feedback.textContent = "✅ Correct! Redirecting to Phase 2...";
      puzzle1Feedback.style.color = "green";

      setTimeout(() => {
        window.location.href = "phase2.html";
      }, 2000);
    } else {
      puzzle1Feedback.textContent = "❌ Incorrect. Try again.";
      puzzle1Feedback.style.color = "red";
    }
  });
});
