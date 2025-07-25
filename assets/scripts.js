document.addEventListener("DOMContentLoaded", () => {
  const puzzle1Form = document.getElementById("puzzle1-form");
  const input = document.getElementById("puzzle1-answer");
  const feedback = document.getElementById("puzzle1-feedback");

  // Answer from base64 hint: d2Fsa3Rocm91Z2guaHRtbA==
  const correctAnswer = "walkthrough.html".toLowerCase();

  if (puzzle1Form) {
    puzzle1Form.addEventListener("submit", (e) => {
      e.preventDefault();

      const userAnswer = (input.value || "").trim().toLowerCase();

      if (!userAnswer) {
        feedback.textContent = "⚠️ Please enter an answer.";
        return;
      }

      const allowed = /^[a-z0-9\s._-]+$/;
      if (!allowed.test(userAnswer)) {
        feedback.textContent = "⚠️ Invalid characters in answer.";
        return;
      }

      if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct! Redirecting...";
        setTimeout(() => {
          window.location.href = correctAnswer;
        }, 1200);
      } else {
        feedback.textContent = "❌ Try again, hacker.";
      }
    });
  }
});
