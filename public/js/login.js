const form = document.querySelector('#login-form');
const submitButton = document.querySelector('#submit-button');
const demoButton = document.querySelector('#demo-button')

//Event for clicking the form button
submitButton.addEventListener('click', async (e) => {
  console.log('submitting');
  e.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');
  const _csrf = formData.get('_csrf');

  const body = { username, password, _csrf };

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
  window.location.href = '/home';
});

//Event for logging in directly to the Demo User account
demoButton.addEventListener('click', async (e) => {
  console.log('logging in as Demo User');
  e.preventDefault();

  const username = 'DemoUser';
  const password = 'password';
  const body = { username, password, };

  const res = await fetch('/api/users/demo', {
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
  window.location.href = '/home';
});
