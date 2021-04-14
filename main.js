const form = document.getElementById('form');
const email = document.getElementById('email');



const isEmail = (email) =>{
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const setError = (input, message) => {
	const formGroup = input.parentElement;
	const small = formGroup.querySelector('small');
	formGroup.className = 'formGroup error';
	small.innerText = message;
}

function setSuccess(input) {
	const formGroup =input.parentElement;
	formGroup.className = 'formGroup success';
}

const formValidation = () => {
  const emailValue = email.value.trim();

  if(emailValue === '') {
		setError(email, 'Oops! Please add your email');
	} else if (!isEmail(emailValue)) {
		setError(email, 'Oops! Please check your email');
	} else {
		setSuccess(email)
  
	}


}


const handleSubmit = e => {
  e.preventDefault();
  const validated = formValidation();
  if(validated){
    email.innerHTML = '';
  }
}



form.addEventListener('submit', handleSubmit);



