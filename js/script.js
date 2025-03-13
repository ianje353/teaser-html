// Login form submission
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    try {
        const response = await fetch('http://localhost:5228/api/Users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Save token and redirect (for now we just log and alert)
            console.log(data);
            alert('Login successful!');
            // Redirect to another page
            window.location.href = 'index.html';
        } else {
            const errorData = await response.json();
            alert('Login failed! ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login.');
    }
});

// Register form submission
document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const email = document.getElementById('register-email').value;

    try {
        const response = await fetch('http://localhost:5228/api/Users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password, email })
        });

        if (response.ok) {
            alert('Registration successful!');
            // Redirect to login page
            window.location.href = 'Login_Register.html';
        } else {
            const errorData = await response.json();
            alert('Registration failed! ' + errorData.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during registration.');
    }
});

// Apartment form submission
document.getElementById("apartmentForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(this); // Get form data

    try {
        const response = await fetch("http://localhost:5228/api/Properties1", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            alert("Apartment added successfully!");
            // Optionally, you can fetch the updated list of apartments and refresh the UI
        } else {
            console.error("Failed to add apartment:", response.statusText);
            alert("Failed to add apartment. Please try again.");
        }
    } catch (error) {
        console.error("Error adding apartment:", error);
        alert("An error occurred. Please try again later.");
    }
});

