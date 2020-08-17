const respondButton = document.getElementById('respond');
const textArea = document.getElementById('comment-text')
const commentContainer = document.getElementById('comments');

respondButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const text = textArea.value;
    const articleId = window.location.pathname.split('/')[2];
    const body = { articleId, text };

    const res = await fetch('/api/stories/comments', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": 'application/json'
        }
    });
    location.reload();
});
