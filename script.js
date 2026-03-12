const loginForm = document.getElementById("loginForm");
const mfaSection = document.getElementById("mfaSection");
const verifyMfaBtn = document.getElementById("verifyMfaBtn");
const resultDiv = document.getElementById("result");
const dashboard = document.getElementById("dashboard");
const welcomeMessage = document.getElementById("welcomeMessage");
const roleMessage = document.getElementById("roleMessage");
const logoutBtn = document.getElementById("logoutBtn");

let users = [];
let currentUser = null;
let failedAttempts = 0;
const maxAttempts = 5;
let isLocked = false;

fetch("users.json")
  .then(response => response.json())
  .then(data => {
    users = data;
  })
  .catch(error => {
    showMessage("Error loading user database.", "error");
    console.error("Failed to load users.json:", error);
  });

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (isLocked) {
    showMessage("Account locked due to too many failed login attempts.", "error");
    return;
  }

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const matchedUser = users.find(
    user => user.username === username && user.password === password
  );

  if (matchedUser) {
    currentUser = matchedUser;
    failedAttempts = 0;
    showMessage("Credentials verified. Proceed to MFA.", "info");
    mfaSection.classList.remove("hidden");
    dashboard.classList.add("hidden");
    console.log(`[INFO] Successful credential check for ${username}`);
  } else {
    currentUser = null;
    mfaSection.classList.add("hidden");
    failedAttempts++;
    console.log(`[WARNING] Failed login attempt ${failedAttempts}`);

    if (failedAttempts >= maxAttempts) {
      isLocked = true;
      showMessage("Account locked due to suspicious activity.", "error");
      console.log("[ALERT] Possible brute force attack detected");
    } else {
      showMessage(
        `Invalid username or password. Attempt ${failedAttempts} of ${maxAttempts}.`,
        "error"
      );
    }
  }
});

verifyMfaBtn.addEventListener("click", function () {
  const enteredCode = document.getElementById("mfaCode").value.trim();

  if (!currentUser) {
    showMessage("No active login session found.", "error");
    return;
  }

  if (enteredCode === currentUser.mfaCode) {
    const fakeToken = generateSessionToken();
    showMessage(`Session Token: ${fakeToken}`, "success");
    mfaSection.classList.add("hidden");
    dashboard.classList.remove("hidden");
    welcomeMessage.textContent = `Welcome, ${currentUser.username}`;
    roleMessage.textContent = `Role: ${currentUser.role}`;
    console.log(`[INFO] MFA success for ${currentUser.username}`);
  } else {
    showMessage("Invalid MFA code.", "error");
    console.log(`[WARNING] Invalid MFA attempt for ${currentUser.username}`);
  }
});

logoutBtn.addEventListener("click", function () {
  console.log(`[INFO] User ${currentUser ? currentUser.username : "unknown"} logged out`);
  currentUser = null;
  dashboard.classList.add("hidden");
  mfaSection.classList.add("hidden");
  loginForm.reset();
  document.getElementById("mfaCode").value = "";
  showMessage("You have been logged out successfully.", "info");
});

function generateSessionToken() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function showMessage(message, type) {
  resultDiv.textContent = message;
  resultDiv.className = `result ${type}`;
}