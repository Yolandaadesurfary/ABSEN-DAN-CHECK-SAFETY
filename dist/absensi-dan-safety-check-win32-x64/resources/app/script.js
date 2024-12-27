document.addEventListener("DOMContentLoaded", () => {
    const loginScreen = document.querySelector(".login-screen");
    const checklistScreen = document.querySelector(".checklist-screen");
    const successScreen = document.querySelector(".success-screen");
  
    const loginBtn = document.getElementById("login-btn");
    const completeBtn = document.getElementById("complete-btn");
  
    loginBtn.addEventListener("click", () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username && password) {
        loginScreen.classList.add("hidden");
        checklistScreen.classList.remove("hidden");
      } else {
        alert("Masukkan username dan password!");
      }
    });
  
    completeBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll("#safety-checklist input");
      let allChecked = true;
  
      checkboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
          allChecked = false;
        }
      });
  
      if (allChecked) {
        checklistScreen.classList.add("hidden");
        successScreen.classList.remove("hidden");
      } else {
        alert("Harap lengkapi semua peralatan keselamatan!");
      }
    });
  });
  