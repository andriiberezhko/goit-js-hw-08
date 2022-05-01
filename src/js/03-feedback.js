
import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const refs = {
    form: document.querySelector(".feedback-form"),
    
};
const formData = {};

populateInputData();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
   
    formData[event.target.name] = event.target.value;
    
  
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(event) {
    event.preventDefault();
    // console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)));
     const mail = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    if (mail === '' || message === '') {
        alert('Все поля должны быть заполнены');
    }
    else {
        const formEl = {
        mail: mail,
        message: message,
    }
    console.log(formEl);
    };
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateInputData() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
   
    if (savedData) {
        if (savedData.message !== undefined) {
            refs.form.message.value = savedData.message;
            formData.message = savedData.message;
        };

        if (savedData.email !== undefined) {
            refs.form.email.value = savedData.email; 
            formData.email = savedData.email;
        };
        
         
    };
   
};