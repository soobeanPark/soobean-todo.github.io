const todoForm = document.getElementById("todo");
const todoInput = document.getElementById("todoinput");

todoForm.addEventListener("submit", handleTodoSubmit);

const TODO_KEY = "todo-key";
todoArray = [];

// localstorage에 TODO_KEY해당하는 항목(JSON string 형식으로 들어 있는)을 변수 savedTodo에 할당
const savedTodo = localStorage.getItem(TODO_KEY);
if (savedTodo !== null) {
  console.log("-------------------------------------");
  // JSON string을 object 형식으로 변환(object array)
  const savedTodoArray = JSON.parse(savedTodo);
  todoArray = savedTodoArray;
  // savedTodoArray에 들어있는 object들을 각각 paintTodo 함수에 넣어서 화면에 그림
  savedTodoArray.forEach((object) => paintTodo(object));
}

function handleTodoSubmit(event) {
  event.preventDefault();

  // input값 변수 설정
  const todoValue = todoInput.value;
  const todoObject = {
    id: Date.now(),
    title: todoValue,
    date: Date.now(),
  };

  // todo li 생성하고 todoList에 추가
  paintTodo(todoObject);

  // 생성한 todo li를 local storage에 저장
  saveTodo(todoObject);

  // input 값 초기화
  todoInput.value = "";
}

function paintTodo(todoObject) {
  // todo li 생성
  const todoLi = document.createElement("li");
  todoLi.id = todoObject.id;
  todoLi.style.height = "19px";

  // li에 todo text 넣어주기
  const todoSpan = document.createElement("span");
  todoSpan.id = "todo-span";
  todoSpan.innerText = todoObject.title;
  todoLi.appendChild(todoSpan);

  // li에 날짜 넣기
  const todoDate = document.createElement("span");
  todoDate.id = "date-span";
  todoDate.innerText = " " + dateFormat(todoObject.date);
  todoLi.appendChild(todoDate);

  // todo 삭제 버튼 생성
  const todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.innerText = "x";
  todoDeleteBtn.id = "delete-btn";
  todoDeleteBtn.addEventListener("click", paintDeleteTodo);
  todoLi.appendChild(todoDeleteBtn);

  // 생성한 todo li를 ul의 자식으로 넣기
  const todoUl = document.getElementById("todo-list");
  todoUl.appendChild(todoLi);
}

function saveTodo(todoObject) {
  todoArray.push(todoObject);

  localStorage.setItem(TODO_KEY, JSON.stringify(todoArray));
}

function paintDeleteTodo(event) {
  const deleteLi = event.target.parentElement;

  //localstorage에 있는 todo 지우기
  localStorageDeleteTodo(deleteLi);

  //li가 통채로 지워지게 하기
  deleteLi.remove();
}

function localStorageDeleteTodo(targetLi) {
  // todoArray에서 targetLi와 id가 일치하지 않는 항목들을 필터링하여 filteredTodoArray에 할당
  const filteredTodoArray = todoArray.filter(
    (todo) => String(todo.id) !== targetLi.id
  );
  todoArray = filteredTodoArray;

  localStorage.setItem(TODO_KEY, JSON.stringify(filteredTodoArray));
}

function dateFormat(dateNumber) {
  const date = new Date(dateNumber);
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

//저장
//아래 리스트 떨어트리기
//새로고침 해도 날라가지 않게 하기
//로컬스토리지에 누적 입력되도록 하기
//버튼 넣기
//버튼 누르면 삭제되게 하기
