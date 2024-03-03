// 初始變數
const list = document.querySelector("#my-todo");
const addBtn = document.querySelector("#add-btn");
const input = document.querySelector("#new-todo");
const doneList = document.querySelector("#my-done");

// 資料
const todos = [
    "Hit the gym",
    "Read a book",
    "Buy eggs",
    "Organize office",
    "Pay bills"
];

for (let todo of todos) {
    addItem(todo);
}

// 函式
function addItem(text) {
    let newItem = document.createElement("li");
    newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `;
    list.appendChild(newItem);
}

// Create
addBtn.addEventListener("click", function () {
    checkInput();
});
input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        checkInput();
        input.value = "";
    }
});

function checkInput() {
    const inputValue = input.value;
    let realWord = 0;
    inputValue.split("").forEach((char) => {
        if (char !== " ") {
            realWord++;
        }
    });

    if (inputValue.length > 0 && realWord > 0) {
        addItem(inputValue);
    }
}

// Delete and check
list.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("delete")) {
        let parentElement = target.parentElement;
        parentElement.remove();
    } else if (target.tagName === "LABEL") {
        target.classList.toggle("checked");
        doneList.appendChild(target.parentElement);
    }
});

// Resume done
doneList.addEventListener("click", function (e) {
    const target = e.target;

    if (target.classList.contains("delete")) {
        let parentElement = target.parentElement;
        parentElement.remove();
    } else if (target.tagName === "LABEL") {
        target.classList.toggle("checked");
        list.appendChild(target.parentElement);
    }
});
