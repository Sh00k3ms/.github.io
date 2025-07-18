document.addEventListener("DOMContentLoaded", () => {
  function validateAnswer(puzzleName, inputId, feedbackId, nextUrl) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);
    const userAnswer = input?.value?.trim().toLowerCase();

    if (!userAnswer) {
      feedback.textContent = "Please enter an answer.";
      feedback.style.color = "orange";
      return;
    }

    fetch("https://under-the-hood-ctf.sh00k3ms.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        puzzle: puzzleName,
        answer: userAnswer
    })
  
      .then(res => res.json())
      .then(data => {
        if (data.status === "correct") {
          feedback.textContent = "✅ Correct! Redirecting...";
          feedback.style.color = "lightgreen";
          if (nextUrl) {
            setTimeout(() => window.location.href = nextUrl, 1500);
          }
        } else {
          feedback.textContent = "❌ Incorrect. Try again.";
          feedback.style.color = "red";
        }
      })
      .catch(err => {
        console.error("Validation error:", err);
        feedback.textContent = "Error. Please try again later.";
        feedback.style.color = "red";
      });

  // Puzzle 1
  const form1 = document.getElementById("puzzle1-form");
  if (form1) {
    form1.addEventListener("submit", e => {
      e.preventDefault();
      validateAnswer("phase1", "puzzle1-answer", "puzzle1-feedback", "phase2.html");
    });
  }

  // Puzzle 2
  const form2 = document.getElementById("puzzle2-form");
  if (form2) {
    form2.addEventListener("submit", e => {
      e.preventDefault();
      validateAnswer("phase2", "puzzle2-answer", "puzzle2-feedback", "phase3.html");
    });
  }

  // Puzzle 3
  const form3 = document.getElementById("puzzle3-form");
  if (form3) {
    form3.addEventListener("submit", e => {
      e.preventDefault();
      validateAnswer("phase3", "puzzle3-answer", "puzzle3-feedback", "phase4.html");
    });
  }

  // Puzzle 4
const form4 = document.getElementById("browserForm");
if (form4) {
  console.log("✅ Phase 4 form detected");

  form4.addEventListener("submit", e => {
    e.preventDefault();
    console.log("🚀 Phase 4 submit triggered");

    validateAnswer("phase4", "browserInput", "browserFeedback", "phase5.html");
  });
}

// Puzzle 5 (Grifter) uses custom logic for final step & no redirect
const form5 = document.getElementById("puzzle5-form");
if (form5) {
  form5.addEventListener("submit", e => {
    e.preventDefault();
    const feedback = document.getElementById("puzzle5-feedback");
    const input = document.getElementById("puzzle5-answer");
    const userAnswer = input?.value?.trim().toLowerCase();

    fetch("https://under-the-hood-ctf.sh00k3ms.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        puzzle: "phase5",
        answer: userAnswer
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "correct") {
          feedback.textContent = "✅ Correct! You found the elusive Grifter in the wild. Ask him if he has a QR code for you to scan.";
          feedback.style.color = "lightgreen";
        } else {
          feedback.textContent = "❌ Incorrect. Try again.";
          feedback.style.color = "red";
        }
      })
      .catch(err => {
        console.error("Validation error:", err);
        feedback.textContent = "Error. Please try again later.";
        feedback.style.color = "red";
      });
  });
}
