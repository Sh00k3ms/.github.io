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

// Puzzle 2 Logic
const puzzle2Form = document.getElementById("puzzle2-form");
if (puzzle2Form) {
  const puzzle2Input = document.getElementById("puzzle2-answer");
  const puzzle2Feedback = document.getElementById("puzzle2-feedback");

  puzzle2Form.addEventListener("submit", (event) => {
    event.preventDefault();

    const userAnswer = puzzle2Input.value.trim().toLowerCase();
    const correctAnswer = "stack overflow is the key";

    if (userAnswer === correctAnswer) {
      puzzle2Feedback.textContent = "✅ Correct! Let's Go!";
      puzzle2Feedback.style.color = "green";
      // You can optionally add:
      // setTimeout(() => { window.location.href = 'phase3.html'; }, 2000);
    } else {
      puzzle2Feedback.textContent = "❌ Incorrect. Try again.";
      puzzle2Feedback.style.color = "red";
    }
  });
}
