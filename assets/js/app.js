const createUserUrl = "https://borjomi.loremipsum.ge/api/register", //method POST  ყველა ველი სავალდებულო
	getAllUsersUrl = "https://borjomi.loremipsum.ge/api/all-users", //method GET
	getSingleUserUrl = "https://borjomi.loremipsum.ge/api/get-user/120 ", //id, method  GET
	updateUserUrl = "https://borjomi.loremipsum.ge/api/update-user/145 ", //id, method PUT  ყველა ველი სავალდებულო
	deleteUserUrl = "https://borjomi.loremipsum.ge/api/delete-user/"; //id, method DELETE

const regForm = document.querySelector("#reg"),
	userName = document.querySelector("#user_name"),
	userSurname = document.querySelector("#user_surname"),
	userEmail = document.querySelector("#user_email"),
	userPhone = document.querySelector("#user_phone"),
	userPersonalID = document.querySelector("#user_personal-id"),
	userZip = document.querySelector("#user_zip-code"),
	userGender = document.querySelector("#user_gender"),
	// user id ფორმში, რომელიც გვჭირდება დაედითებისთვის
	user_id = document.querySelector("#user_id");

const user = {
	first_name: "satesto",
	last_name: "text",
	phone: "123456789",
	id_number: "12345678909",
	email: "text@gmail.com",
	gender: "male",
	zip_code: "1245",
};

new Promise((resolve, reject) => {
	if (false) {
		resolve("success");
	} else {
		reject("error");
	}
})
	.then((data) => {
		console.log(data);
	})
	.catch((data) => {
		console.log(data);
	});

// async await

// fetch().then().then().catch()

// try {
// 	console.log("try");
// 	regForm.addEventListener("submit", (e) => {});
// } catch (error) {
// 	console.log(error);
// } finally {
// 	console.log("finally");
// }

console.log("after try catch");
function getAllUsers() {
	// add loading spinner
	fetch("https://borjomi.loremipsum.ge/api/all-users")
		.then((res) => res.json())
		.then((data) => {
			console.log(data.users);
			// render users
			const html = data.users
				.map((el) => {
					return `
         <div class="user"></div>
        `;
				})
				.join("");

			// section.innerHtml = html
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			// remove loading spinner
			console.log("finally");
		});
}

function createUser(user) {
	fetch("https://borjomi.loremipsum.ge/api/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			console.log("finally");
		});
}

function deleteUser(userId) {
	fetch(`${deleteUserUrl}${userId}`, {
		method: "DELETE",
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			console.log("finally");
		});
}

function getUser(userId) {
	fetch(`https://borjomi.loremipsum.ge/api/get-user/${userId}`)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		})
		.finally(() => {
			console.log("finally");
		});
}

getAllUsers();

regForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// validations

	const user = {
		first_name: userName.value,
		last_name: userSurname.value,
		phone: userPhone.value,
		id_number: userPersonalID.value,
		email: userEmail.value,
		gender: userGender.value,
		zip_code: userZip.value,
	};

	if (true) {
		console.log(user);
		createUser(user);

		// getAllUsers();
	}
});
