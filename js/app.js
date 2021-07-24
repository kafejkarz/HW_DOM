document.addEventListener("DOMContentLoaded", () => {
    
    const newForm = document.querySelector('#new-form');
    newForm.addEventListener('submit', handleForm);

    const deleteButton = document.querySelector('#delete_all');
    deleteButton.addEventListener('click', handleDeleteAll);

    
})

const handleForm = function (event) {
    event.preventDefault();
    
    const listItems = newList(event.target);
    const list = document.querySelector('#list');
    list.appendChild(listItems);

   
}   
    
    const newList = function (form) {
        const itemsNewList = document.createElement('li');
        itemsNewList.classList.add('items-new-list');
    
        const first_name = document.createElement('h3');
        first_name.textContent = form.first_name.value;
        itemsNewList.appendChild(first_name);
        
        const last_name = document.createElement('h3');
        last_name.textContent = form.last_name.value;
        itemsNewList.appendChild(last_name);

        const car= document.createElement('h3');
        car.textContent = form.car.value;
        itemsNewList.appendChild(car)


        const engine = document.createElement('h3')
        engine.textContent = form.engine.value;
        itemsNewList.appendChild(engine);
        
        const colour = document.createElement('h3');
        colour.textContent = form.colour.value;
        itemsNewList.appendChild(colour);
        
       return itemsNewList
}

const handleDeleteAll = function (event) {
    const list = document.querySelector('#list');
    list.innerHTML = '';
}

    
