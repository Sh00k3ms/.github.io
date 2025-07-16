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
    console.log("Puzzle 2 submitted: ", userAnswer); // Moved here

    const correctAnswer = "stack overflow is the key";

    if (userAnswer === correctAnswer) {
      puzzle2Feedback.textContent = "✅ Correct! Let's Go!";
      puzzle2Feedback.style.color = "green";
      setTimeout(() => {
        window.location.href = "phase3.html";
      }, 2000);
    } else {
      puzzle2Feedback.textContent = "❌ Incorrect. Try again.";
      puzzle2Feedback.style.color = "red";
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
    const correctAnswer = "echo";

    if (userAnswer === correctAnswer) {
      puzzle3Feedback.textContent = "✅ Correct! You may continue...";
      puzzle3Feedback.style.color = "green";
      // Optional: redirect to phase4.html
      // setTimeout(() => { window.location.href = "phase4.html"; }, 2000);
    } else {
      puzzle3Feedback.textContent = "❌ Incorrect. Try again.";
      puzzle3Feedback.style.color = "red";
    }
  });
}  

});
