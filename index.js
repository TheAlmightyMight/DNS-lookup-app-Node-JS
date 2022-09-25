const input = document.getElementById("in");
const out = document.getElementById("out");
const search = document.getElementById("search");

input.addEventListener("submit", (e) => {
  e.preventDefault();
  let text = e.currentTarget.children[0].value;
  console.log(e.currentTarget.children[0].value);

  if (/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/gi.test(text)) {
    return;
  } else if (/\w+\.\w+/gi.test(text)) {
    return;
  }

  input.style.border = "1.5px solid red";

  setTimeout(() => {
    input.style.border = "";
  }, 1000);
});
