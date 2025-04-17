document.getElementById('jokeBtn').addEventListener('click', getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("jokeText").innerText = data.joke;
    })
    .catch(err => {
      document.getElementById("jokeText").innerText = "Failed to load joke.";
    });
}
