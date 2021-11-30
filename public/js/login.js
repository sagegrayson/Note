const loginFormHandler = async (event) => {
  console.log("how about this")
  event.preventDefault();

  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert("Failed to log in.");
    }
  }
};



document
  .querySelector(".form-signin")
  .addEventListener("submit", loginFormHandler);


