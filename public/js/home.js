

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
    <li>
      <div class="story">
        <a href="/stories/${story.id}">
          <div class="story-headers">
            <h3 class ="story-title">${story.title}</h3>
            <div class="story-byline">
              <p>An interesting byline goes here</p>
            </div>
          </div>
        </a>
        <div class="author-category">
          <p>
            <a href="/users/${story.authorId}">${story.User.username}</a>
            in
            <a href="/categories/${story.categoryId}">${story.Category.name}</a>
          </p>
        </div>
        <div class="story-info">
          <p>${timestamp} * 5 min read</p>
        </div>
        <div class="dropdown-button">
          <i class="fas fa-chevron-circle-down"></i>
        </div>
        <ul class="dropdown-menu" style="display: none">
          <li><button class="delete" data-id=${story.id}>Delete</button></li>
        </ul>
        <div class="story-image">
          <img src="${story.imagePath}">
        </div>
      </div>
    </li>
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
