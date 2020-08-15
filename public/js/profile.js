// const { getUserFromToken } = require("../../routes/utils/auth");

const getData = async (id) => {
    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    return data;
}

  const createClapLi = (clap) => {
    return `
      <li class="clap-li">
        <h3 class="clap-article-title"><a href="/stories/${clap.articleId}">${clap.Article.title}</a></h3>
        <span class="clap-article-author"><a href="/users/${clap.userId}">${clap.User.username}</a></span>
      </li>
    `;
  }

const populateClaps = async () => {
    const clapsList = document.querySelector('.my-claps');

    const userId = window.location.pathname.split("/")[2];

    const { claps } = await getData(userId);
    // clapsList.innerHTML = li;
    for (let clap of claps) {
        const clapLi = createClapLi(clap);
        clapsList.innerHTML += clapLi;
    }
}

populateClaps();



const populateProfileDetails = async () => {
  const profileDiv = document.querySelector('#profile-details');
  const profileName = document.querySelector('#profile-name');
  const profileCreated = document.querySelector('#member-since');
  const clapsHeader = document.querySelector('#claps-from-header');

  const userId = window.location.pathname.split("/")[2];
  const { user } = await getData(userId);

  const createdAt = new Date(user.createdAt);

  const dateOptions = {
    year: "numeric",
    month: "short",
  };

  const timestamp = createdAt.toLocaleString("en-US", dateOptions);

  profileName.innerHTML = user.username;
  profileCreated.innerHTML = `Meatium member since ${timestamp}`;
  clapsHeader.innerHTML = `Claps from ${user.username}`;
}

populateProfileDetails();
