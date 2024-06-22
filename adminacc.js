document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password match the expected credentials
    if (username === 'puti at itim' && password === '123pt') {
      // Successful login
      document.getElementById('loginMessage').textContent = 'Login successful!';
      // Redirect to admin page or perform additional actions here
      // For demo purposes, redirect to another page after 1 second
      setTimeout(function() {
        window.location.href = 'admincreate.html'; // Replace 'admin.html' with your actual admin page URL
      }, 1000); // 1000 milliseconds = 1 second
    } else {
      // Failed login
      document.getElementById('loginMessage').textContent = 'Invalid Username and Password';
    }
  });
  