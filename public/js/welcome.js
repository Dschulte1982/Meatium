//reference login.js or signup.js if needed

const form = document.querySelector('#login-form');
const button = document.getElementById('show')
const closeButton = document.getElementById('close-window');

button.addEventListener('click', e => {
    document.getElementById('login-form').style.display = "flex";
})

closeButton.addEventListener('click', e => {
    document.getElementById('login-form').style.display = "none";
})

form.addEventListener('submit', async (e) => {
  console.log('submitting');
  e.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username')
  const password = formData.get('password')

  const body = { username, password };

  const res = await fetch('/api/users/token', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  if (!res.ok) {
    const { message } = data;
    const errorsContainer = document.querySelector('#errors-container');
    errorsContainer.innerHTML = message;
    return;
  }

  window.location.href = '/';
});
