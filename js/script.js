let longURL = document.getElementById("longurl");
let shortURL = document.getElementById("shorturl");
let cleanBtn = document.getElementById("cleanBtn");
let openNewTabBtn = document.getElementById("openNewTabBtn");

//let axiosURL = "http://localhost:5000";
let axiosURL = "https://m-url.herokuapp.com";
let shortenLink = "";

function submitForm() {
  if (longURL.value) {
    longURL.className = "form-control";
    cleanBtn.className = "input-group-text";
    openNewTabBtn.className = "input-group-text";

    try {
      axios
        .post(axiosURL + "/api/url", {
          longUrl: longURL.value,
        })
        .then((response) => {
          shortURL.value = response.data.url.shortUrl;
          shortenLink = response.data.url.shortUrl;
        })
        .catch((error) => {
          console.log(error);
          longURL.className = "form-control is-invalid";
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    longURL.className = "form-control is-invalid";
  }
}

function copyClipboard() {
  shortURL.select();
  document.execCommand("copy");
}
function clearForm() {
  longURL.value = "";
  shortURL.value = "";
  cleanBtn.className = "input-group-text isShow";
  openNewTabBtn.className = "input-group-text isShow";
}

function openWebsite() {
  window.open(shortenLink, "_blank");
}
function wakeUpServer() {
  try {
    axios
      .get(axiosURL)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  } catch (err) {
    console.error(err);
  }
}

wakeUpServer();
