

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



}
