//reference login.js or signup.js if needed

const form = document.querySelector('#login-form');
const signInButton = document.getElementById('show')
const getStartedNav = document.getElementById('get-started-nav');
const getStartedMain = document.getElementById('get-started-main');
const getStartedAd = document.getElementById('get-started-ad');
const getStartedSlogan = document.getElementById('get-started-slogan');
const closeSignInButton = document.getElementById('close-sign-in');
const closeSignUpButton = document.getElementById('close-sign-up');
const signInLink = document.getElementById('link-to-other-form');
const signInLinkButton = document.getElementById('link-to-login');
const signUpLinkButton = document.getElementById('link-to-sign-up');


signInButton.addEventListener('click', e => {
    const signup = document.getElementById('signup-form');
    if (signup.style.display = 'flex') {
      signup.style.display = 'none';
    }
    document.getElementById('login-form').style.display = "flex";
});

signUpLinkButton.addEventListener('click', e => {
  const signup = document.getElementById('signup-form');
  if (signup.style.display = 'flex') {
    signup.style.display = 'none';
  }
  document.getElementById('login-form').style.display = "none";
  document.getElementById('signup-form').style.display = "flex";
});

getStartedNav.addEventListener('click', e => {
    const login = document.getElementById('login-form');
    if (login.style.display = 'flex') {
      login.style.display = 'none';
    }
    document.getElementById('signup-form').style.display = "flex";
})

signInLinkButton.addEventListener('click', e => {
  const login = document.getElementById('login-form');
  if (login.style.display = 'flex') {
    login.style.display = 'none';
  }
  document.getElementById('signup-form').style.display = "none";
  document.getElementById('login-form').style.display = "flex";
});

getStartedMain.addEventListener('click', e => {
  const login = document.getElementById('login-form');
  if (login.style.display = 'flex') {
    login.style.display = 'none';
  }
  document.getElementById('signup-form').style.display = "flex";
})

getStartedAd.addEventListener('click', e => {
  const login = document.getElementById('login-form');
  if (login.style.display = 'flex') {
    login.style.display = 'none';
  }
  document.getElementById('signup-form').style.display = "flex";
})

getStartedSlogan.addEventListener('click', e => {
  const login = document.getElementById('login-form');
  if (login.style.display = 'flex') {
    login.style.display = 'none';
  }
  document.getElementById('signup-form').style.display = "flex";
})

closeSignInButton.addEventListener('click', e => {
    document.getElementById('login-form').style.display = "none";
})

closeSignUpButton.addEventListener('click', e => {
    document.getElementById('signup-form').style.display = "none";
})

signInLink.addEventListener('click', e => {
  document.getElementById('login-form').style.display = "flex";
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
