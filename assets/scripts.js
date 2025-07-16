document.addEventListener("DOMContentLoaded", () => {
  // Puzzle 1 Logic
  const puzzle1Form = document.getElementById("puzzle1-form");
  if (puzzle1Form) {
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
  }

// Puzzle 3 Logic
const puzzle3Form = document.getElementById("puzzle3-form");
if (puzzle3Form) {
  const puzzle3Input = document.getElementById("puzzle3-answer");
  const puzzle3Feedback = document.getElementById("puzzle3-feedback");

  puzzle3Form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = puzzle3Input.value.trim().toLowerCase();
    const correctAnswer = "glider";

    if (userAnswer === correctAnswer) {
      puzzle3Feedback.textContent = "✅ Correct! Onward to the final phase...";
      puzzle3Feedback.style.color = "green";
      setTimeout(() => {
        window.location.href = "phase4.html";
      }, 2000);
    } else {
      puzzle3Feedback.textContent = "❌ Incorrect. Try again.";
      puzzle3Feedback.style.color = "red";
    }
  });
}

// Puzzle 4 Logic
const puzzle4Form = document.getElementById("puzzle4-form");
if (puzzle4Form) {
  const puzzle4Input = document.getElementById("puzzle4-answer");
  const puzzle4Feedback = document.getElementById("puzzle4-feedback");

  puzzle4Form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = puzzle4Input.value.trim().toLowerCase();
    const correctAnswer = "where's the goon grifter???";

    if (userAnswer === correctAnswer) {
      puzzle4Feedback.textContent = "🎯 Nailed it! You found Grifter!";
      puzzle4Feedback.style.color = "green";
      setTimeout(() => {
        window.location.href = "claim.html"; // or wherever you want to route them
      }, 2000);
    } else {
      puzzle4Feedback.textContent = "❌ Not quite. Try again.";
      puzzle4Feedback.style.color = "red";
    }
  });
}

});
