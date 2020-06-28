const seats = document.querySelector(".seats");

function createSeatRow(rownum) {
  let html = `<div class="line"><div>${rownum}</div>`;
  for (let i = 1; i <= 10; i++) {
    let active = (rownum == 2 || rownum == 3) && (i == 5 || i == 6);
    html += `<div class="seat ${active ? "green" : ""}">
            <span>${i}</span>
      </div>`;
  }
  html += `<div>${rownum}</div></div>`;
  return html;
}

let requiredHtml = "";
for (let i = 1; i < 5; i++) {
  requiredHtml += createSeatRow(i);
}
console.log(requiredHtml);
seats.innerHTML = requiredHtml;
