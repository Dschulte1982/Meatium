const form = document.querySelector('#login-form');

console.log('login script runs');

form.addEventListener('submit', async (e) => {
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

});
