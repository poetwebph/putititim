document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value.trim();
    if (name !== '') {
        localStorage.setItem('username', name); // Store name in local storage
        window.location.href = 'homepage.html';
    } else {
        alert('Please enter your name to proceed.');
    }
});
