let input = document.querySelector(".form-control");
let btn = document.querySelector(".btn-outline-primary");
let list_item_group = document.querySelector(".list_item_group");

let item = [];
let countID = 0;
input.addEventListener("change", () => {
  let inputValue = input.value;
  countID++;

  // list_item_group.innerHTML += `<div class=list_item><li class="list" >${
  //   countID + "   " + input.value
  // }</li><button class="del-btn">Delete</button></div>`;
  let parent = document.createElement("div");
  parent.classList.add("list_item");
  let li_group = document.createElement("li");
  li_group.classList.add("list");
  li_group.innerHTML = countID + "  " + inputValue;

  item.push(inputValue);
  console.log(item);
  li_group.addEventListener("click", () => {
    li_group.classList.toggle("active");
  });
  console.log(li_group.innerHTML);
  let button = document.createElement("button");
  button.classList.add("del-btn");

  parent.append(li_group);
  parent.append(button);
  list_item_group.append(parent);
  button.addEventListener("click", () => {
    parent.innerHTML = "";
    console.log(parent.innerHTML);
  });
  input.value = "";
});
