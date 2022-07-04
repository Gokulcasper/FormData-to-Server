// Create Element By Using DOM
let inputTxtId = document.getElementById("input-txt-id");
let inputButtonId = document.getElementById("input-button-id");
let inputList = document.getElementById("input-list");

const handleinputTxtId = () => {
  let li = document.createElement("li");
  let divItem = document.createElement("div");
  let divBtn = document.createElement("div");

  li.append(divItem, divBtn);

  divBtn.parentElement.setAttribute("onclick", "removeItem(event)");
  divBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  //   <div>ATHLETICS</div>
  //      <div onclick="removeItem(event)">
  //          <i class="fa-solid fa-trash-can"></i>
  //     </div>

  divItem.textContent = inputTxtId.value;
  li.className = "input-item";

  inputList.append(li);
  //   li.append(divItem);
  //   li.append(divBtn);

  inputTxtId.value = "";
};

inputButtonId.addEventListener("click", handleinputTxtId);

inputTxtId.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    handleinputTxtId();
  } else if (event.key === "keyZ" && (event.ctrlKey || event.metaKey)) {
    inputTxtId.value = "";
  }
});

//---------------------------

function removeItem(event) {
  const eventList = event.target.parentNode.parentNode;

  eventList.remove(); // New Way

  //   eventList.parentNode.removeChild(eventList); // Old Way
}
