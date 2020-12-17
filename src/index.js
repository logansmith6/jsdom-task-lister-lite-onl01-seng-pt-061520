document.addEventListener("DOMContentLoaded", () => {

const listTask = document.querySelector("#tasks");

  // prevents form submission
  const submit = document.getElementById('create-task-form');
  submit.addEventListener('submit', function(event){
    event.preventDefault();


    listTask.innerHTML +=
     `<li> ${document.getElementById('new-task-description').value}
      <button data-action = "delete"> X </button>
      </li>
     `;

  });

  listTask.addEventListener("click", function(bye){
    if (bye.target.dataset.action === "delete"){
      bye.target.parentElement.remove();
    }
  });












});
