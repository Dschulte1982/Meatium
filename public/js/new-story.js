const form = document.querySelector('#story-form');
const errorsContainer = document.querySelector('#errors-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const title = formData.get('title');
  const text = formData.get('text');
  const categoryId = formData.get('categoryId');
  const _csrf = formData.get('csrf');

  const body = { title, text, categoryId, _csrf };

  errorsContainer.innerHTML = '';

  const res = await fetch('/api/stories', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const data = await res.json();
  if (!res.ok) {
    const { message, errors } = data;
    for (let error of errors) {
      const errorLi = document.createElement('li');
      errorLi.innerHTML = error;
      errorsContainer.appendChild(errorLi);
    }
    return;
  }

  const { story } = data;

  window.location.href = `/stories/${story.id}`;
});
