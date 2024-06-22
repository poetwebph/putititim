// Event listener for login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Retrieve user data from localStorage
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Check if there's a matching username and password in stored data
  let loggedInUser = users.find(user => user.username === username && user.password === password);

  if (loggedInUser) {
    // Successful login
    document.getElementById('loginMessage').textContent = 'Login successful!';
    
    // Store the logged-in user in sessionStorage for session management
    sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

    // Redirect to homepage after a short delay (1 second)
    setTimeout(function() {
      window.location.href = 'homepage.html'; // Redirect to homepage
    }, 1000); // 1000 milliseconds = 1 second

  } else {
    // Failed login
    document.getElementById('loginMessage').textContent = 'Invalid username or password';
  }
});