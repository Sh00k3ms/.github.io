document.addEventListener("DOMContentLoaded", () => {
  // Puzzle 1: Caesar Cipher
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

 // Puzzle 2: Source Clue (answer hidden in HTML)
const puzzle2Form = document.getElementById("puzzle2-form");
if (puzzle2Form) {
  const puzzle2Input = document.getElementById("puzzle2-answer");
  const puzzle2Feedback = document.getElementById("puzzle2-feedback");
  const hiddenAnswer = document.getElementById("puzzle2-answer-key")?.dataset.answer?.toLowerCase();

  puzzle2Form.addEventListener("submit", (event) => {
    event.preventDefault();
    const userAnswer = puzzle2Input.value.trim().toLowerCase();

    if (userAnswer === hiddenAnswer) {
      puzzle2Feedback.textContent = "✅ You saw through the source. Forward to Phase 3...";
      puzzle2Feedback.style.color = "green";
      setTimeout(() => {
        window.location.href = "phase3.html";
      }, 2000);
    } else {
      puzzle2Feedback.textContent = "❌ Incorrect. Check the source closely.";
      puzzle2Feedback.style.color = "red";
    }
  });
}


  // Puzzle 3: Glider Symbol
  const puzzle3Form = document.getElementById("puzzle3-form");
  if (puzzle3Form) {
    const puzzle3Input = document.getElementById("puzzle3-answer");
    const puzzle3Feedback = document.getElementById("puzzle3-feedback");

    puzzle3Form.addEventListener("submit", (event) => {
      event.preventDefault();
      const userAnswer = puzzle3Input.value.trim().toLowerCase();
      const correctAnswer = "glider";

      if (userAnswer === correctAnswer) {
        puzzle3Feedback.textContent = "✅ Correct! Onward to Phase 4...";
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

  // Puzzle 4: Tabnabbing Awareness
  const tabnabbingForm = document.getElementById("tabnabbingForm");
  if (tabnabbingForm) {
    const tabInput = document.getElementById("tabInput");
    const tabFeedback = document.getElementById("tabFeedback");

    tabnabbingForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const answer = tabInput.value.toLowerCase().trim();

      if (
        answer.includes("tabnabbing") &&
        (answer.includes("phishing") || answer.includes("credential"))
      ) {
        tabFeedback.textContent = "✅ Nicely done. Let’s see if you can find Grifter...";
        tabFeedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "phase5.html";
        }, 2000);
      } else {
        tabFeedback.textContent = "❌ Not quite. Try explaining what tabnabbing is.";
        tabFeedback.style.color = "red";
      }
    });
  }

  // Puzzle 5: Final Code Phrase from Grifter
  const puzzle4Form = document.getElementById("puzzle4-form");
  if (puzzle4Form) {
    const puzzle4Input = document.getElementById("puzzle4-answer");
    const puzzle4Feedback = document.getElementById("puzzle4-feedback");

    puzzle4Form.addEventListener("submit", (event) => {
      event.preventDefault();
      const userAnswer = puzzle4Input.value.trim().toLowerCase();
      const correctAnswer = "hack the planet";

      if (userAnswer === correctAnswer) {
        puzzle4Feedback.textContent = "🎯 Nailed it! You found Grifter!";
        puzzle4Feedback.style.color = "green";
        setTimeout(() => {
          window.location.href = "claim.html";
        }, 2000);
      } else {
        puzzle4Feedback.textContent = "❌ Not quite. Try again.";
        puzzle4Feedback.style.color = "red";
      }
    });
  }
});
