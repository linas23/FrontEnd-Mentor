const months = document.querySelectorAll(".month");

months.forEach((month) => {
  let text = month.querySelector(".text");
  let div = document.createElement("div");
  div.classList.add("bar");
  div.style.height = Math.floor(Math.random() * 100) + "%";
  month.insertBefore(div, text);
  console.log(month);
});
months[Math.floor(Math.random() * 12)]
  .querySelector(".bar")
  .classList.add("active");
