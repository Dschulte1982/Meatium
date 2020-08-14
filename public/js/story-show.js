

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
                      <div class="story-user-follow'>
                        <a href="users/${story.User.id}">${story.User.username}</a>
                        <button type="button" class="author-follow-button">Follow</button>
                      </div>
                      <div class="story-date-length">${timestamp} * 5 min</div>
                    </div>
                  <div>
                    <button type="button" class="story-options-button">...</button>
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

const populateStory = async () => {
  const storyContainer = document.querySelector(".story-container");

  const storyId = window.location.pathname.split('/')[2];

  const { story } = await getStory(storyId);
  const storyEle = createStory(story);
  storyContainer.innerHTML += storyEle;
}

populateStory();
