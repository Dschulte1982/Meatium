const getClaps = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    return data;
}

const li = `
    <li>
      <div class="likes">
        <div> Coming Soon </div>
        </div>
    </li>
  `;

  const createClapLi = (story) => {
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

const populateClaps = async () => {
    const clapsList = document.querySelector('.my-claps');

    const { claps } = await getClaps();
    // clapsList.innerHTML = li;
    for (let clap of claps) {
        const clapLi = createClapLi(clap);
        clapsList.innerHTML += clapLi;
    }
}

populateClaps();
