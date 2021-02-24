let longURL = document.getElementById("longurl");
let shortURL = document.getElementById("shorturl");
let cleanBtn = document.getElementById("cleanBtn");

//let axiosURL = "http://localhost:5000";
let axiosURL = "https://m-url.herokuapp.com";

function submitForm() {
  if (longURL.value) {
    longURL.className = "form-control";
    cleanBtn.className = "input-group-text";

    try {
      axios
        .post(axiosURL + "/api/url", {
          longUrl: longURL.value,
        })
        .then((response) => {
          //console.log(response.data.url);
          shortURL.value = response.data.url.shortUrl;
        })
        .catch((error) => {
          console.log(error);
          longURL.className = "form-control is-invalid";
        });
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log("noldu");
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
