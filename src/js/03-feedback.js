import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const storegeKey = 'feedback-form-state';


const userInfo = () => {
const formData = {
email: emailInput.value,
message: messageInput.value,
};
localStorage.setItem(storegeKey, JSON.stringify(formData));
}

const loadForm = () => {
    const savedInfo = localStorage.getItem(storegeKey);
    if (savedInfo){
        formData = JSON.parse(savedInfo);
       emailInput.value = formData.email;
       messageInput.value = formData.message;
    };
}

const clearForm = () => {
    localStorage.removeItem(storegeKey);
};

const throttledUserInfo = throttle(userInfo, 500);

form.addEventListener('input', () => {
    throttledUserInfo();
});

form.addEventListener('submit', sendForm);

function sendForm(event){
event.preventDefault();
if (emailInput.value === "" || messageInput.value === "" ){
    alert('Please fill in all the fields');
} else { (emailInput.value !== '' && messageInput.value !=='')
    clearForm();
    console.log({
        email: emailInput.value,
        message: messageInput.value,
    });
    form.reset();
}
}

loadForm();