// Function to save user data to localStorage
function saveUserData(username, password) {
    // Retrieve existing user data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if username already exists
    for (let user of users) {
      if (user.username === username) {
        return false; // Username already exists
      }
    }
  
    // Add new user data to the array
    users.push({ username: username, password: password });
  
    // Save updated user data back to localStorage
    localStorage.setItem('users', JSON.stringify(users));
  
    return true; // Successfully saved user data
  }
  
  // Event listener for create account form submission
  document.getElementById('createAccountForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input values
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
  
    // Save the new user data
    if (saveUserData(newUsername, newPassword)) {
      // Successful account creation
      document.getElementById('createAccountMessage').textContent = 'Account created successfully! Redirecting to login...';
      
      // Clear the form fields after successful account creation
      document.getElementById('newUsername').value = '';
      document.getElementById('newPassword').value = '';
  
      // Redirect to login page after a short delay (1.5 seconds)
      setTimeout(function() {
        window.location.href = 'admincreate.html'; // Redirect to login page
      }, 1500); // 1500 milliseconds = 1.5 seconds
    } else {
      // Failed account creation (username already exists)
      document.getElementById('createAccountMessage').textContent = 'Username already exists. Please choose a different one.';
    }
  });