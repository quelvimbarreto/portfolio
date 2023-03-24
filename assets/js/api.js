function loadUrl(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send();
  return xhr.responseText;
}

const profileData = JSON.parse(loadUrl("data/profile.json"));
