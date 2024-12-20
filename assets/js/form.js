const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const close = modal.querySelector(".close");
const openModal = document.querySelector(".open-modal");

close.addEventListener("click", () => {
	modal.close();
});

// form validation
const registrationForm = document.querySelector("#registration-form");
const nameInput = registrationForm.querySelector("input[name='name']");
const emailInput = registrationForm.querySelector("input[name='email']");
const passwordInput = registrationForm.querySelector("input[name='password']");
const confirmPasswordInput = registrationForm.querySelector(
	"input[name='confirm-password']"
);
const phoneNumberInput = registrationForm.querySelector('input[name="phone"]');
const personalNumberInput = registrationForm.querySelector(
	'input[name="personal-number"]'
);
const terms = registrationForm.querySelector('input[name="terms"]');

const isValidEmail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const setErrorMessage = (input, message) => {
	const parentEl = input.closest(".input-control");
	parentEl.querySelector(".error").innerText = message;
	parentEl.classList.add("fail");
	parentEl.classList.remove("success");
};

const clearErrorMessage = (input) => {
	const parentEl = input.closest(".input-control");
	parentEl.classList.remove("fail");
	parentEl.classList.add("success");
	parentEl.querySelector(".error").innerText = "";
};

const isNameValidFn = () => {
	const nameValue = nameInput.value.trim();
	if (nameValue === "") {
		// setErrorMessage(nameInput, "Name is required");
		nameInput.nextElementSibling.innerText = "Name is required";
		nameInput.parentElement.classList.add("fail");
		nameInput.parentElement.classList.remove("success");
	} else if (nameValue.length < 6) {
		// setErrorMessage(nameInput, "Name must be at least 6 characters");
		nameInput.nextElementSibling.innerText =
			"Name must be at least 6 characters";
		nameInput.parentElement.classList.add("fail");
		nameInput.parentElement.classList.remove("success");
	} else if (nameValue.length > 20) {
		setErrorMessage(nameInput, "Name must be at most 20 characters");
	} else {
		clearErrorMessage(nameInput);
		return true;
	}
};

const isEmailValidFn = () => {
	const emailValue = emailInput.value.trim();
	if (emailValue === "") {
		setErrorMessage(emailInput, "Email is required");
	} else if (!isValidEmail(emailValue)) {
		setErrorMessage(emailInput, "Invalid email");
	} else if (!/.edu$/.test(emailValue)) {
		setErrorMessage(emailInput, "Only .edu domain is allowed");
	} else {
		clearErrorMessage(emailInput);
		return true;
	}
};

const isPasswordValidFn = () => {
	const passwordValue = passwordInput.value.trim();
	if (passwordValue === "") {
		setErrorMessage(passwordInput, "Password is required");
	} else if (passwordValue.length < 6) {
		setErrorMessage(passwordInput, "Password must be at least 6 characters");
	} else {
		clearErrorMessage(passwordInput);
		return true;
	}
};

const isConfirmPasswordValidFn = () => {
	const confirmPasswordValue = confirmPasswordInput.value.trim();
	const passwordValue = passwordInput.value.trim();

	if (confirmPasswordValue === "") {
		setErrorMessage(confirmPasswordInput, "Confirm password is required");
	} else if (confirmPasswordValue !== passwordValue) {
		setErrorMessage(confirmPasswordInput, "Passwords do not match");
	} else {
		clearErrorMessage(confirmPasswordInput);
		return true;
	}
};

// 1. არსებულ ფორმში დაამატეთ 2 ველი personal-number, mobile-number

// 2.  personal_number - ვალიდაცია:  სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 11 ის ტოლი.

// 3.  mobile_number - ვალიდაცია: სავალდებულოა, უნდა შეიცავდეს მხოლოდ რიცხვებს, შეყვანილი სიმბოლოების რაოდენობა უნდა იყოს 9-ის ტოლი.

// 4*. დაამატეთ checkbox ინფუთი Terms and Conditions-სთვის,  რომელიც სავალდებულოა და submit ღილაკი იყოს  disabled თუ იუზერი ამ ჩექბოქსს არ მონიშნავს.

const isPhoneNumberValidFn = () => {
	const phoneNumberValue = phoneNumberInput.value.trim();
	if (phoneNumberValue === "") {
		setErrorMessage(phoneNumberInput, "Phone number is required");
	} else if (!/^\d{9}$/.test(phoneNumberValue)) {
		setErrorMessage(phoneNumberInput, "Invalid phone number");
	} else {
		clearErrorMessage(phoneNumberInput);
		return true;
	}
};

const isPersonalNumberValidFn = () => {
	const personalNumberValue = personalNumberInput.value.trim();
	if (personalNumberValue === "") {
		setErrorMessage(personalNumberInput, "Personal number is required");
	} else if (!/^\d{11}$/.test(personalNumberValue)) {
		setErrorMessage(personalNumberInput, "Invalid personal number");
	} else {
		clearErrorMessage(personalNumberInput);
		return true;
	}
};

const isTermsValidFn = () => {
	if (!terms.checked) {
		setErrorMessage(terms, "You must agree to the terms");
		registrationForm.querySelector("button[type='submit']").disabled = true;
	} else {
		clearErrorMessage(terms);
		registrationForm.querySelector("button[type='submit']").disabled = false;
		return true;
	}
};

nameInput.addEventListener("input", isNameValidFn);
// emailInput.addEventListener("input", isEmailValidFn);
// passwordInput.addEventListener("input", isPasswordValidFn);
// confirmPasswordInput.addEventListener("input", isConfirmPasswordValidFn);
// phoneNumberInput.addEventListener("input", isPhoneNumberValidFn);
// personalNumberInput.addEventListener("input", isPersonalNumberValidFn);
// terms.addEventListener("change", isTermsValidFn);

registrationForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// name validation
	const isNameValid = isNameValidFn();
	// email validation
	// const isEmailValid = isEmailValidFn();
	// // password validation
	// const isPasswordValid = isPasswordValidFn();
	// // confirm password validation
	// const isConfirmPasswordValid = isConfirmPasswordValidFn();
	// // phone number validation
	// const isPhoneNumberValid = isPhoneNumberValidFn();
	// // personal number validation
	// const isPersonalNumberValid = isPersonalNumberValidFn();
	// // terms validation
	// const isTermsValid = isTermsValidFn();

	// აქვს თუ არა ყველა ინფუთს success კლასი
	if (
		[...registrationForm.querySelectorAll(".input-control")].every((el) =>
			el.classList.contains("success")
		)
	) {
		modal.showModal();
		// registrationForm.submit();
	}

	// if (
	// 	isNameValid &&
	// 	isEmailValid &&
	// 	isPasswordValid &&
	// 	isConfirmPasswordValid &&
	// 	isPhoneNumberValid &&
	// 	isPersonalNumberValid &&
	// 	isTermsValid
	// ) {
	// 	modal.showModal();
	// 	registrationForm.reset();
	// 	// remove success classes
	// }
});
