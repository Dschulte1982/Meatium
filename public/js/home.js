

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

  const storyLis = document.querySelectorAll(".stories-list > a");
  const storyDropdownButtons = document.querySelectorAll(".stories-list .dropdown-button");
  // const storyModals = document.querySelectorAll(".stories-list .modal-background");
  const deleteButtons = document.querySelectorAll(".stories-list .delete");
  const storyDropdowns = document.querySelectorAll(".stories-list .dropdown-menu");

  //here is where we will add event listeners on the dropdown menu button and delete button therein.
  // for (let i = 0; i < storyLis.length; i++) {
  //   const storyLi = storyLis[i];
  //   const storyDropdownButton = storyDropdownButtons[i];
  //   // const storyModal = storyModals[i];
  //   const deleteButton = deleteButtons[i];
  //   const storyDropdown = storyDropdowns[i];


  // };

};


populateStoryList();
