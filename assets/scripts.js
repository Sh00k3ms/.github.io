
document.addEventListener("DOMContentLoaded", () => {
  // Helper to decode the answer from <meta>
  function getDecodedAnswer() {
    const meta = document.querySelector('meta[data-answer]');
    return atob(meta?.dataset?.answer || "");
  }

  // Puzzle 1: Caesar Cipher
  const puzzle1Form = document.getElementById("puzzle1-form");
  if (puzzle1Form) {
    const input = document.getElementById("puzzle1-answer");
    const feedback = document.getElementById("puzzle1-feedback");
    const correctAnswer = getDecodedAnswer();

    puzzle1Form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct! Redirecting to Phase 2...";
        feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "phase2.html";
        }, 2000);
      } else {
        feedback.textContent = "❌ Incorrect. Try again.";
        feedback.style.color = "red";
      }
    });
  }

  // Puzzle 2: Source Sleuth
  const puzzle2Form = document.getElementById("puzzle2-form");
  if (puzzle2Form) {
    const input = document.getElementById("puzzle2-answer");
    const feedback = document.getElementById("puzzle2-feedback");
    const correctAnswer = getDecodedAnswer();

    puzzle2Form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ You saw through the source. Forward to Phase 3...";
        feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "phase3.html";
        }, 2000);
      } else {
        feedback.textContent = "❌ Incorrect. Check the source closely.";
        feedback.style.color = "red";
      }
    });
  }

  // Puzzle 3: Glider Symbol
  const puzzle3Form = document.getElementById("puzzle3-form");
  if (puzzle3Form) {
    const input = document.getElementById("puzzle3-answer");
    const feedback = document.getElementById("puzzle3-feedback");
    const correctAnswer = getDecodedAnswer();

    puzzle3Form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Correct! Onward to Phase 4...";
        feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "phase4.html";
        }, 2000);
      } else {
        feedback.textContent = "❌ Incorrect. Try again.";
        feedback.style.color = "red";
      }
    });
  }

  // Puzzle 4: Tabnabbing Awareness
  const tabnabbingForm = document.getElementById("tabnabbingForm");
  if (tabnabbingForm) {
    const input = document.getElementById("tabInput");
    const feedback = document.getElementById("tabFeedback");
    const correctAnswer = getDecodedAnswer();

    tabnabbingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        feedback.textContent = "✅ Nicely done. Let’s see if you can find Grifter...";
        feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "phase5.html";
        }, 2000);
      } else {
        feedback.textContent = "❌ Not quite. Try again.";
        feedback.style.color = "red";
      }
    });
  }

  // Puzzle 5: Final Code Phrase from Grifter
  const puzzle5Form = document.getElementById("puzzle5-form");
  if (puzzle5Form) {
    const input = document.getElementById("puzzle5-answer");
    const feedback = document.getElementById("puzzle5-feedback");
    const correctAnswer = getDecodedAnswer();

    puzzle5Form.addEventListener("submit", (e) => {
      e.preventDefault();
      const userAnswer = input.value.trim().toLowerCase();
      if (userAnswer === correctAnswer) {
        feedback.textContent = "🎯 Nailed it! You found Grifter!";
        feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "claim.html";
        }, 2000);
      } else {
        feedback.textContent = "❌ Not quite. Try again.";
        feedback.style.color = "red";
      }
    });
  }
});
