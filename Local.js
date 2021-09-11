const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        alert('please eneter feilds');
    } else {
        console.log('success');
    }

    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('email', emailInput.value);

}