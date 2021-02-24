let longURL = document.getElementById("longurl");
let shortURL = document.getElementById("shorturl");
let axiosURL = "https://m-url.herokuapp.com";

longURL.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(longURL.value);
});

function submitForm() {
  console.log(longURL.value);
  try {
    axios
      .post(axiosURL + "/api/url", {
        longUrl: longURL.value,
      })
      .then((response) => {
        console.log(response.data.url);
        shortURL.value = response.data.url.shortUrl;
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
}

function copyClipboard() {
  console.log("copyde");
  shortURL.select();
  document.execCommand("copy");
}

function wakeUpServer() {
  try {
    axios
      .get(axiosURL)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
}

wakeUpServer();
