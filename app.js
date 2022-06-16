const url = "https://icanhazdadjoke.com/";

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  fetchDadJoke();
});

// async/await method to fetch api ,makes things easier as it wait more time before it gives a response ....
const fetchDadJoke = async () => {
  result.textContent = "Loading...";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "learning app",
      },
    });

    // if respone.ok equal fail throw me an error
    if (!response.ok) {
      throw new Error(" error");
    }

    // give me the data throw a form of json object
    const data = await response.json();

    result.textContent = data.joke;
    //  if we catch an error throw me a message in the result section
  } catch (error) {
    console.log(error.message);
    result.textContent = "There was an error...";
  }
};

fetchDadJoke();
