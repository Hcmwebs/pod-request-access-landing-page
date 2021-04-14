const form = document.getElementById('form');
const email = document.getElementById('email');
const formGroup = document.getElementById('formGroup');
const errMsg = document.getElementById('errorMsg');



const isEmail = (email) =>{
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const setError = (message) => {
	formGroup.className = 'formGroup error';
	errMsg.innerText = message;
}

const setSuccess = () => {
	email.value = '';
}

const formValidation = () => {
  const emailValue = email.value.trim();

  if(emailValue === '') {
		setError('Oops! Please add your email');
	} else if (!isEmail(emailValue)) {
		setError('Oops! Please check your email');
	} else {
		setSuccess();
	}

}


const handleSubmit = (e) => {
  e.preventDefault();
  formValidation();

}



form.addEventListener('submit', handleSubmit);



