const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector("#inputEmail").value.trim();
  const password = document.querySelector("#inputPassword").value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the all posts page
      document.location.replace("/all-posts");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".form-signin")
  .addEventListener("submit", loginFormHandler);
