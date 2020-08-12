

const getStories = async () => {
  const res = await fetch('/api/stories');
  const data = await res.json();
  return data;
}

const createStoryLi = (story) => {
  const createdAt = new Date(story.createdAt);
  const timeOptions = {
    minute: "numeric",
    hour: "numeric",
  };

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const timestamp =
    createdAt.toLocaleString('en-US', timeOptions) +
    " . " +
    createdAt.toLocaleString('en-US', dateOptions);

  return `
    <a href="/tweets/${story.id}">
      <li>
        <div class="user-icon">
          <i class="fas fa-user"></i>
        </div>
        <div class="tweet">
          <div class="tweet-header">
            @${story.User.username} · ${timestamp}
            <div class="dropdown-arrow">
              <i class="fas fa-chevron-circle-down"></i>
            </div>
            <div class="modal-background" style="display: none"></div>
            <ul class="dropdown-menu" style="display: none">
              <li><button class="delete" data-id=${story.id}>Delete</button></li>
            </ul>
          </div>
          <div class="tweet-contents">
            ${story.message}
          </div>
        </div>
      </li>
    </a>
  `;
}

const populateStoryList = async () => {
  const storiesList = document.querySelector('.stories-list');

  const { stories } = await getStories();
  for (let story of stories) {
    const storyLi = createStoryLi(story);
    storiesList.innerHTML += storyLi;
  }

}
