const buttonEL = document.querySelector('button');
const inputEL = document.querySelector('input');
const listEL = document.querySelector('ul'); 

function addItem() {
  const inputValue = inputEL.value;
  if (inputValue === '') {
    alert('Please enter a valid item.');
    return;
  }

  const listItemEL = document.createElement('li');
  listItemEL.textContent = inputValue;
  listEL.appendChild(listItemEL);
  
  inputEL.value = ''; 
}

buttonEL.addEventListener('click', addItem);