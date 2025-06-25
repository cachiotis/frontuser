// URL base del backend (actualiza con tu dominio o IP pública)
const API_BASE_URL = "https://login-backend-70nm.onrender.com"; // Sustituye con la URL de tu backend desplegado

// Manejador para el formulario de registro
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('registerUser').value;
    const password = document.getElementById('registerPassword').value;
    const name = document.getElementById('registerUsername').value;

    try {
        const res = await fetch(`${API_BASE_URL}/api/register`, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, name })
        });
        const data = await res.json();
        alert(data.message || data.error);
    } catch (error) {
        alert('Error al conectar con el servidor: ' + error.message);
    }
});

// Manejador para el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const res = await fetch(`${API_BASE_URL}/api/login`, { // Aquí usamos la URL base
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.token) {
            alert('Login exitoso');
            localStorage.setItem('token', data.token);
        } else {
            alert(data.error);
        }
    } catch (error) {
        alert('Error al conectar con el servidor: ' + error.message);
    }
});
