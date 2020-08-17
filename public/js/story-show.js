
const clapButton = document.getElementById('clap')
const clapText = document.getElementById('clap-text')
const commentButton = document.getElementById('comment')
const commentText = document.getElementById('comment-text')

const sigClapButton = document.getElementById('signature-clap')
const sigClapText = document.getElementById('sig-clap-text')
const sigCommentButton = document.getElementById('signature-comment')
const sigCommentText = document.getElementById('sig-comment-text')

const decreaseClapButton = document.getElementById('decrease-clap')
const commentCloseButton = document.getElementById('close-comments')
const commentCancelButton = document.getElementById('cancel')
const textButtons = document.getElementById('text-buttons');
const bottomCommentButton = document.getElementById('comment');
const respondButton = document.getElementById('respond');

let clapCount = 0;
let commentsChecked = false;

clapButton.addEventListener('click', e => {
  clapCount += 1;
  clapText.innerHTML = `<span class='clapCounter'>${clapCount}</span>`;
});

commentText.addEventListener('click', e => {
  textButtons.style.display = 'flex';
  textButtons.style.justifyContent = 'flex-end';
})

commentCancelButton.addEventListener('click', e => {
  textButtons.style.display = 'none';
  textButtons.style.outline = 'none';
})

commentButton.addEventListener('click', e => {
  const commentsBox = document.getElementById('comments');

  if (commentsChecked === false) {
    commentsBox.style.display = 'block'
    commentsChecked = true;
  } else if (commentsChecked === true) {
    console.log('hide')
    commentsBox.style.display = 'none'
    commentsChecked = false;
  }
});

commentCloseButton.addEventListener('click', e => {
  const commentsBox = document.getElementById('comments');
  commentsBox.style.display = 'none';
  commentsChecked = false;
});

sigClapButton.addEventListener('click', e => {
  clapCount += 1;
  sigClapText.innerHTML = `<span id='sigClapCounter'>${clapCount} claps</span>`;
});

sigCommentButton.addEventListener('click', e => {
  const commentsBox = document.getElementById('comments');

  if (commentsChecked === false) {
    commentsBox.style.display = 'block'
    commentsChecked = true;
  } else if (commentsChecked === true) {
    commentsBox.style.display = 'none'
    commentsChecked = false;
  }
});

decreaseClapButton.addEventListener('click', e => {
  if(clapCount !== 0){
    clapCount -= 1;
  }

  clapText.innerHTML = `<span class='clapCounter'>${clapCount}</span>`;
  sigClapText.innerHTML = `<span id='sigClapCounter'>${clapCount} claps</span>`;
});

const getStory = async (id) => {
  const res = await fetch('/api/stories/' + id);
  const data = await res.json();
  return data;
};

const createStory = (story) => {
  const createdAt = new Date(story.createdAt);
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timestamp = createdAt.toLocaleString('en-US', dateOptions);

  return `
    <article>
      <div>
        <section class="story-contents">
          <div class="story-header">
            <h1 class="story-title">${story.title}</h1>
            <div>
              <div class="story-meta-info">
                <div class='profile-block'>
                  <img class="profile-pic" src="/assets/profile-pics/anonymous-profile-pic.jpg"
                    <div class="story-user">
                      <div class="story-user-follow">
                        <a href="users/${story.User.id}">${story.User.username}</a>
                        <button type="button" class="author-follow-button">Follow</button>
                      </div>
                      <div class="story-date-length">${timestamp} • 5 min</div>
                    </div>
                  <div>
                    <button type="button" class="story-delete-button">Delete Story</button>
                  </div>
                </div>
              </div>
              <div class="story-header-buttons"></div>
            </div>
          </div>
          <div class="story-body">
            <img class='story-image' src=${story.imagePath}>
            <p class="story-text">${story.text}</p>
          </div>
        </section>
      </div>
    </article>
  `;
}

const getComments = async (id) => {
  const res = await fetch('/api/stories/' + id);
  const data = await res.json();
  return data;
};

const createComment = async (story) => {
  console.log(story);
  const commentArray = story.Comments;
  let textArea = '';
  for (let i = 0; i < commentArray.length; i++) {
    const item = commentArray[i];
    const value = Object.values(item);
    const user = story.User.username;
  let textStuff =
          `
           <div class='user-info'>
             <img class='user-image' src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-4.png"/>
             <div class='user-name'> ${user}</div>
           </div>
             <section class='comment-content'
              <p class='comment text'>${value[0]}</p>
             </section>
          `
          textArea += textStuff;
  }
  return textArea;
};

const createResponses = async (story) => {
  const comments = story.Comments;
  let responseSize = comments.length;
  return responseSize;
}

const populateStory = async () => {
  const storyContainer = document.querySelector(".story-container");

  const storyId = window.location.pathname.split('/')[2];

  const { story } = await getStory(storyId);
  const storyEle = createStory(story);
  storyContainer.innerHTML += storyEle;

  const deleteButton = document.querySelector('.story-delete-button');
  console.log('The deleteButton contains: ', deleteButton);

  deleteButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const storyId = window.location.pathname.split('/')[2];

    const res = await fetch(`/api/stories/${storyId}`, { method: "DELETE" });

    if (res.ok) window.location.href = '/home';
  });
}

const populateComments = async () => {
  const commentsContainer = document.querySelector('#comments-container');
  const storyId = window.location.pathname.split('/')[2];
  const { story } = await getComments(storyId)
  const commentEle = await createComment(story)
  commentsContainer.innerHTML += commentEle
};

const populateResponses = async () => {
  const responseContainer = document.getElementById('responses');
  const storyId = window.location.pathname.split('/')[2];
  const { story } = await getStory(storyId);
  const responseEle = await createResponses(story);
  responseContainer.innerHTML += ` (${responseEle})`;

}

populateResponses();
populateStory();
populateComments();
