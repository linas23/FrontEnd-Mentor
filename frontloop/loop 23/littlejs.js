const movies = document.querySelectorAll(".movie");
const details = document.querySelectorAll(".details");

movies.forEach((movie) => movie.addEventListener("mouseover", toggledDetails));

function toggledDetails(e) {
  console.log(this);
  details.forEach((detail) => (detail.style.display = "none"));
  let target = this.querySelector(".details");
  target.style.display = "block";
}
