const shareButton = document.getElementById("share");
const shareOverlay = document.getElementById("share-overlay");

let isEnabled = false;

function buttonTrigger() {
  if (isEnabled === false) {
    shareOverlay.style.display = "flex";
    isEnabled = true;
  } else {
    shareOverlay.style.display = "none";
    isEnabled = false;
  }
}

shareButton.addEventListener("click", buttonTrigger);
