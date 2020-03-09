const baseEndPoint = "https://api.github.com";
const usersEndPoint = `${baseEndPoint}/users`;
const userEl = document.querySelector(".user");

async function displayUser(username) {
  const response = await fetch(`${usersEndPoint}/${username}`);
  const data = await response.json();
  console.log(data);
  console.log(data.blog);
  console.log(data.name);
  console.log(data.location);
  userEl.textContent = `${data.name} - ${data.blog}`;
}

function handleError(err) {
  console.log("Oh No");
  console.log(err);
  userEl.textContent = `Something went wrong: ${err}`;
}

displayUser("osj007").catch(handleError);
