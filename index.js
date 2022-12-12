window.addEventListener("load", (event) => {
  var images = [
    "velik.svg",
    "still-here.svg",
    "fixing-universe.svg",
    "maradona.svg",
  ];
  var randomImage = images[Math.floor(Math.random() * images.length)];

  document.getElementById("hero").src = randomImage;
});
