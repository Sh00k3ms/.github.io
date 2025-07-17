document.addEventListener("DOMContentLoaded", () => {
  // Helper to decode the answer from <meta>
  function getDecodedAnswer() {
    const meta = document.querySelector('meta[data-answer]');
    return atob(meta?.dataset?.answer || "");
  }

  // Puzzle 1
  try {
    const form = document.getElementById("puzzle1-form");
    const input = document.getElementById("puzzle1-answer");
    const feedback = document.getElementById("puzzle1-feedback");
    const correctAnswer = getDecodedAnswer();

    if (form && input && feedback) {
      form.addEventListener("submit", (e) => {
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
  } catch (err) {
    console.error("Puzzle 1 Error:", err);
  }

  // Puzzle 2
  try {
    const form = document.getElementById("puzzle2-form");
    const input = document.getElementById("puzzle2-answer");
    const feedback = document.getElementById("puzzle2-feedback");
    const correctAnswer = getDecodedAnswer();

    if (form && input && feedback) {
      form.addEventListener("submit", (e) => {
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
  } catch (err) {
    console.error("Puzzle 2 Error:", err);
  }

  // Puzzle 3
  try {
    const form = document.getElementById("puzzle3-form");
    const input = document.getElementById("puzzle3-answer");
    const feedback = document.getElementById("puzzle3-feedback");
    const correctAnswer = getDecodedAnswer();

    if (form && input && feedback) {
      form.addEventListener("submit", (e) => {
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
  } catch (err) {
    console.error("Puzzle 3 Error:", err);
  }

  // Puzzle 4
  try {
    const form = document.getElementById("tabnabbingForm");
    const input = document.getElementById("tabInput");
    const feedback = document.getElementById("tabFeedback");
    const correctAnswer = getDecodedAnswer();

    if (form && input && feedback) {
      form.addEventListener("submit", (e) => {
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
  } catch (err) {
    console.error("Puzzle 4 Error:", err);
  }

  // Puzzle 5
  try {
    const form = document.getElementById("puzzle5-form");
    const input = document.getElementById("puzzle5-answer");
    const feedback = document.getElementById("puzzle5-feedback");
    const correctAnswer = getDecodedAnswer();

    if (form && input && feedback) {
      form.addEventListener("submit", (e) => {
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
  } catch (err) {
    console.error("Puzzle 5 Error:", err);
  }
});
