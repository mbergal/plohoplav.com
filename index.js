window.addEventListener("load", (event) => {
  var images = [
    "velik.svg",
    "still-here.svg",
    "fixing-universe.svg",
    "maradona.svg",
    "birth.svg",
    "thread.svg",
    "not-important.svg",
    "hair-dryer.svg"
  ];
  var randomImage = images[Math.floor(Math.random() * images.length)];
  var img = document.getElementById("hero");
  img.src = randomImage;
  img.addEventListener("load", function () {
    img.style.visibility = "visible";
  });
});
