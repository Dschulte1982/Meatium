

const getStories = async () => {
  const res = await fetch('/api/stories');
  const data = await res.json();
  return data;
}


//Will eventually need to interpolate a byline and readTime from the Article model
const createStoryLi = (story) => {
  const createdAt = new Date(story.createdAt);

  const dateOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const timestamp = createdAt.toLocaleString('en-US', dateOptions);

  return `
    <div class="wrapper">
      <div class="article">
        <div class='image-container'>
          <img class='resize' src="${story.imagePath}">
        </div>
        <div>
          <div><a class='title' href="/stories/${story.id}">${story.title}</a></div>
        </div>
        <div>
          <text class='description'>Clever byline goes here</text>
        </div>
        <div>
          <div class='author'><a href='/users/${story.authorId}'>${story.User.username}</a> in ${story.Category.name}</div>
          <text class='date'>${timestamp} • 5 min read
        </div>
      </div>
    </div>
  `;
}

const populateStoryList = async () => {
  const storiesList = document.querySelector('.stories-list');

  const { stories } = await getStories();

  for (let story of stories) {
    const storyLi = createStoryLi(story);
    storiesList.innerHTML += storyLi;
  }


};


populateStoryList();

const userProfile = document.querySelector('#user-profile');
