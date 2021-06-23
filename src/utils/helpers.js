export function groupPostByUsers(data){
  const response = [];

  data.map((post) => {
    const exist = response.find(({ user_id }) => user_id === post.from_id);
    if (exist) {
      return exist.posts.push(post);
    }

    return response.push({
      user_id: post.from_id,
      user_name: post.from_name,
      posts: [post],
    });
  });

  return response.sort((a, b) => {
    if(a.user_name > b.user_name) {
      return 1;
    }
    if(b.user_name > a.user_name) {
      return -1;
    }
    return 0;
  });
};

export function sortPostsByParameter(posts, parameter = "ASC") {
  if (parameter === "ASC") {
    return posts.slice().sort((a, b) => {
      return new Date(b.created_time) - new Date(a.created_time);
    });
  }

  return posts.slice().sort((a, b) => {
    return new Date(a.created_time) - new Date(b.created_time);
  });
}

export function verifyToken(token, expiration) {
  if (!token || token.length === 0) {
    return false;
  }

  const currentDate = new Date();
  console.log(currentDate.getTime());
  console.log(expiration);

  if (expiration >= currentDate.getTime()) {
    return true;
  }

  return false;
}

export function formatDate(string) {
  const date = new Date(string);
  const options = {
    month: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    year: "numeric",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en", options).format(date);
}

export function generateSlug(text) {
  return text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
}