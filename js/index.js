const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const btn = document.querySelector('.btn');
const msg1 = document.querySelector('.msg-1');
const msg2 = document.querySelector('.msg-2');
const alert = document.querySelector('.alert');


myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault(); 
     if(nameInput.value === '' || emailInput.value === '') {
        msg1.innerHTML = 'Please enter your name:';
        msg2.innerHTML = 'Please enter your email:'

        setTimeout(()=> msg1.remove(), 10000);
        setTimeout(()=> msg2.remove(), 10000);
        
     }else {
        alert.innerHTML = 'Form has been Submitted.';

        setTimeout(()=> alert.remove(), 2000);
     }

     nameInput.value = '';
     emailInput.value = '';
}