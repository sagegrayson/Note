const signupFormHandler = async (event) => {
  console.log("is this called");
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputpassword1").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);