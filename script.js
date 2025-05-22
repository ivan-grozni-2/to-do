const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

let tasks = [];

form.addEventListener('submit', function(e){
    e.preventDefault();
    const task = input.value.trim();
    if(task !== ''){
        tasks.push(task);
        inputvalue='';
        savetask();
        writetask();
    }
});

function writetask(){
    list.innerHTML='';
    tasks.forEach((t, index) => {
           
        const li =document.createElement('li')
        li.innerHTML =`
            <span>${t}</span>
            <button class = "delete-button" data-index="${index}"> Delete </button>`;
        list.appendChild(li);
        });
        
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            tasks.splice(index, 1);
            savetask();
            writetask();

    
        })
    })
   
}

function savetask(){
    localStorage.setItem('tasks.txt',JSON.stringify(tasks));

}

function loadtasks(){
    const storedtasks = localStorage.getItem('tasks.txt');
    if (storedtasks) {
        tasks = JSON.parse(storedtasks);
        writetask();
    }
}

loadtasks();
