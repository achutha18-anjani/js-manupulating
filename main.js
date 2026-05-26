function offbutton() {
  document.getElementById("bulbima").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("switch").textContent = "Switched Off";
  document.getElementById("cateye").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("switch").style.color = "blue";
  document.getElementById("offbg").style.backgroundColor = "red";
  document.getElementById("onbg").style.backgroundColor = "grey";
}

function onbutton() {
  document.getElementById("bulbima").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("switch").textContent = "Switched On";
  document.getElementById("cateye").src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("switch").style.color = "white";
  document.getElementById("onbg").style.backgroundColor = "green";
  document.getElementById("offbg").style.backgroundColor = "grey";
}
