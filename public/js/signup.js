const form = document.querySelector('#signup-form');


form.addEventListener('submit', async (e) => {
  console.log('submitting');
  e.preventDefault();
  const formData = new FormData(form);
  const username = formData.get('username')
  const email = formData.get('email')
  const password = formData.get('password')
  const passwordConfirm = formData.get('passwordConfirm')

  const body = { email, username, password, passwordConfirm };

  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  if (!res.ok) {
    const { message, errors } = data;
    const errorsContainer = document.querySelector('#errors-container');
    for (let error of errors) {
      const errorLi = document.createElement('li');
      errorLi.innerHTML = error;
      errorsContainer.appendChild(errorLi);
    }
    return;
  }

  window.location.href = '/';
});
