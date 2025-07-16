const scriptURL = "https://script.google.com/macros/s/AKfycbyIQ5UnvD0i9EMEN8dn-1Jw1O17uMCs4P4hMky0Wcajs0-pJzGFbcFOYXeogYLo9ZpbCA/exec";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("claim-form");
  const input = document.getElementById("handle-input");
  const message = document.getElementById("response-message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = input.value.trim();

      if (!name) {
        message.textContent = "Please enter a name.";
        return;
      }

      fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({ name: name }),
        headers: { "Content-Type": "application/json" }
      })
        .then(() => {
          message.textContent = `Thanks, ${name}. Respect the pack.`;
          form.reset();
        })
        .catch(() => {
          message.textContent = "There was an error. Try again later.";
        });
    });
  }
});

