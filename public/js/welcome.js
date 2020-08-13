//reference login.js or signup.js if needed

const form = document.querySelector('#login-form');
const signInButton = document.getElementById('show')
const getStartedButton = document.getElementById('get-started');
const closeSignInButton = document.getElementById('close-sign-in');
const closeSignUpButton = document.getElementById('close-sign-up');


signInButton.addEventListener('click', e => {
    document.getElementById('login-form').style.display = "flex";
})

getStartedButton.addEventListener('click', e => {
    document.getElementById('signup-form').style.display = "flex";
})

closeSignInButton.addEventListener('click', e => {
    document.getElementById('login-form').style.display = "none";
})

closeSignUpButton.addEventListener('click', e => {
    document.getElementById('signup-form').style.display = "none";
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
